package com.example.demo.service.impl;

import com.example.demo.model.entity.RouteEntity;
import com.example.demo.model.service.RouteServiceModel;
import com.example.demo.model.view.RouteDetailsViewModel;
import com.example.demo.model.view.RouteViewModel;
import com.example.demo.repository.RouteRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.RouteService;
import com.example.demo.service.UserService;
import com.example.demo.util.CurrentUser;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RouteServiceImpl implements RouteService {

    private final RouteRepository routeRepository;
    private final ModelMapper modelMapper;
    private final CurrentUser currentUser;
    private final UserService userService;
    private final CategoryService categoryService;

    public RouteServiceImpl(RouteRepository routeRepository, ModelMapper modelMapper, CurrentUser currentUser, UserService userService, CategoryService categoryService) {
        this.routeRepository = routeRepository;
        this.modelMapper = modelMapper;
        this.currentUser = currentUser;
        this.userService = userService;
        this.categoryService = categoryService;
    }

    @Override
    public List<RouteViewModel> findAllRoutesView() {
        return routeRepository
                .findAll()
                .stream()
                .map(route->{
                    RouteViewModel routeViewModel = modelMapper.map(route,RouteViewModel.class);
                    if (route.getPictures().isEmpty()){
                        routeViewModel.setPictureUrl("/images/pic4.jpg");
                    }else {
                        routeViewModel.setPictureUrl(route.getPictures().stream().findFirst().get().getUrl());
                    }
                    return routeViewModel;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void addNewRoute(RouteServiceModel routeServiceModel) {
        RouteEntity routeEntity = modelMapper.map(routeServiceModel,RouteEntity.class);
        routeEntity.setAuthor(userService.findCurrentLoginUserEntity());
        routeEntity.setCategories(routeServiceModel
                .getCategories()
                .stream()
                .map(categoryNameEnum -> categoryService.findByCategoryName(categoryNameEnum))
                .collect(Collectors.toSet()));


       routeRepository.save(routeEntity);
    }

    @Override
    public RouteDetailsViewModel findRouteById(Long id) {
        return routeRepository
                .findById(id)
                .map(routeEntity -> modelMapper.map(routeEntity,RouteDetailsViewModel.class))
                .orElse(null);
    }
}
