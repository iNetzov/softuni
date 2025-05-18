package com.example.demo.models.service;

import com.example.demo.models.entity.Category;
import com.example.demo.models.entity.enums.CategoryNameEnum;
import com.example.demo.models.entity.enums.GenderEnum;

import java.math.BigDecimal;

public class ItemServiceModel {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private CategoryNameEnum category;
    private GenderEnum gender;

    public ItemServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }



    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }

    public CategoryNameEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryNameEnum category) {
        this.category = category;
    }
}
