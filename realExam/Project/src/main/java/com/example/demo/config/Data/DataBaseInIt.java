package com.example.demo.config.Data;

import com.example.demo.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBaseInIt implements CommandLineRunner {

    private final CategoryService categoryService;

    public DataBaseInIt(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Override
    public void run(String... args) throws Exception {

        categoryService.dataBaseInIt();
    }
}
