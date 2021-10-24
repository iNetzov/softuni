package com.example.demo.model.service;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.User;
import com.example.demo.model.entity.enums.CategoryNameEnum;

import java.time.LocalDate;

public class ShipServiceModel {
   private Long id ;
    private LocalDate created;
    private Long health;
    private Long power;
    private String name;
    private CategoryNameEnum category;
    private User user;

    public ShipServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getCreated() {
        return created;
    }

    public void setCreated(LocalDate created) {
        this.created = created;
    }

    public Long getHealth() {
        return health;
    }

    public void setHealth(Long health) {
        this.health = health;
    }

    public Long getPower() {
        return power;
    }

    public void setPower(Long power) {
        this.power = power;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CategoryNameEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryNameEnum category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
