package com.example.demo.config.inIt;

import com.example.demo.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInIt implements CommandLineRunner {

  private final CategoryService categoryService;

    public DatabaseInIt(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @Override
    public void run(String... args) throws Exception {
        categoryService.databaseInit();
    }
}
