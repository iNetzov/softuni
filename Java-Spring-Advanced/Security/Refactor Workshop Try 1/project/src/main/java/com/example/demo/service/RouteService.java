package com.example.demo.service;

import com.example.demo.model.service.RouteServiceModel;
import com.example.demo.model.view.RouteDetailsViewModel;
import com.example.demo.model.view.RouteViewModel;

import java.util.List;

public interface RouteService {
    List<RouteViewModel> findAllRoutesView();

    void addNewRoute(RouteServiceModel routeServiceModel);

    RouteDetailsViewModel findRouteById(Long id);
}
