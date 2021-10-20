package com.example.demo.service.impl;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.enums.CategoryEnums;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void initCategories() {
        if (categoryRepository.count() != 0){
            return;
        }
        Arrays.stream(CategoryEnums.values()).forEach(categoryEnums ->{
            Category category = new Category();
            category.setName(categoryEnums);
            switch (categoryEnums){
                case CAKE: category.setNeededTime(10); break;
                case DRINK:category.setNeededTime(1);break;
                case COFFEE:category.setNeededTime(2);break;
                case OTHER:category.setNeededTime(5);break;
            }
            categoryRepository.save(category);
        });
    }

    @Override
    public Category findByCategoryNameEnum(CategoryEnums category) {
        return categoryRepository.findByName(category).orElse(null);
    }
}
