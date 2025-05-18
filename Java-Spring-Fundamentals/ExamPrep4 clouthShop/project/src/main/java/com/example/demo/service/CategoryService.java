package com.example.demo.service;

import com.example.demo.models.entity.Category;
import com.example.demo.models.entity.enums.CategoryNameEnum;

public interface CategoryService {
    void databaseInit();

    Category findByName(CategoryNameEnum category);
}
