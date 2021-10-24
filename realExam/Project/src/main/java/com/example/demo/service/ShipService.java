package com.example.demo.service;

import com.example.demo.model.entity.Ship;
import com.example.demo.model.service.ShipServiceModel;

public interface ShipService {
    void addShip(ShipServiceModel shipServiceModel);


    Ship findByName(String name);
}
