package com.example.demo.service.impl;

import com.example.demo.model.entity.Order;
import com.example.demo.model.service.OrderServiceModel;
import com.example.demo.model.view.OrderViewModel;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.OrderService;
import com.example.demo.service.UserService;
import com.example.demo.utils.CurrentUser;
import org.aspectj.weaver.ast.Or;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private final CurrentUser currentUser;
    private final CategoryService categoryService;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper, UserService userService, CurrentUser currentUser, CategoryService categoryService) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
        this.currentUser = currentUser;
        this.categoryService = categoryService;
    }

    @Override
    public void addOrder(OrderServiceModel orderServiceModel) {
    Order order  = modelMapper.map(orderServiceModel,Order.class);
    order.setEmployee(userService.findById(currentUser.getId()));
    order.setCategory(categoryService.findByCategoryNameEnum(orderServiceModel.getCategory()));
    orderRepository.save(order);
    }

    @Override
    public List<OrderViewModel> findAllByPriceDESC() {
        List<Order>orders =  orderRepository.findAllByOrderByPriceDesc();

      return  orders
                .stream()
                .map(order -> modelMapper.map(order,OrderViewModel.class))
                .collect(Collectors.toList());

    }

    @Override
    public void readyOrder(Long id) {
        orderRepository.deleteById(id);

    }
}
