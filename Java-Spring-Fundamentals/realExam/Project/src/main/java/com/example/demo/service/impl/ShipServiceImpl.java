package com.example.demo.service.impl;

import com.example.demo.model.entity.Ship;
import com.example.demo.model.service.ShipServiceModel;
import com.example.demo.repository.ShipRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ShipService;
import com.example.demo.service.UserService;
import com.example.demo.utils.CurrentUser;
import org.springframework.stereotype.Service;

@Service
public class ShipServiceImpl implements ShipService {

    private final UserService userService;
    private final CurrentUser currentUser;
    private final CategoryService categoryService;
    private final ShipRepository shipRepository;

    public ShipServiceImpl(UserService userService, CurrentUser currentUser, CategoryService categoryService, ShipRepository shipRepository) {
        this.userService = userService;
        this.currentUser = currentUser;
        this.categoryService = categoryService;
        this.shipRepository = shipRepository;
    }

    @Override
    public void addShip(ShipServiceModel shipServiceModel) {
        Ship ship = new Ship();
        ship.setUser(userService.findById(currentUser.getId()));
        ship.setCategory(categoryService.findByCategoryName(shipServiceModel.getCategory()));
        ship.setCreated(shipServiceModel.getCreated());
        ship.setHealth(shipServiceModel.getHealth());
        ship.setName(shipServiceModel.getName());
        ship.setPower(shipServiceModel.getPower());
        shipRepository.save(ship);
    }

    @Override
    public Ship findByName(String name) {
       return shipRepository.findByName(name).orElse(null);
    }
}
