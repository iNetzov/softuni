package com.example.demo.service;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.enums.CategoryNameEnum;

public interface CategoryService {
    void dataBaseInIt();


    Category findByCategoryName(CategoryNameEnum category);
}
