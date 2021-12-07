package com.example.demo.config.inIt;

import com.example.demo.service.CategoryService;
import com.example.demo.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataBaseInIt implements CommandLineRunner {
    private final UserService userService;
    private final CategoryService categoryService;

    public DataBaseInIt(UserService userService, CategoryService categoryService) {

        this.userService = userService;
        this.categoryService = categoryService;
    }

    @Override
    public void run(String... args) throws Exception {

        userService.initializeUsers();
        categoryService.initCategories();
    }
}
