package com.example.demo.service;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.enums.CategoryEnums;

public interface CategoryService {

    void initCategories();

    Category findByCategoryNameEnum(CategoryEnums category);
}
