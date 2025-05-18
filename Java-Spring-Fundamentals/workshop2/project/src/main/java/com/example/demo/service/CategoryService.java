package com.example.demo.service;

import com.example.demo.model.entity.CategoryEntry;
import com.example.demo.model.entity.enums.CategoryNameEnum;

import java.util.Optional;

public interface CategoryService {

    CategoryEntry findByCategoryName(CategoryNameEnum categoryNameEnum);
}
