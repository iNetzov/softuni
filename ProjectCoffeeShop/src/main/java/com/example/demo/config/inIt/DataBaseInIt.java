package com.example.demo.config.inIt;

import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataBaseInIt implements CommandLineRunner {
    private final UserService userService;

    public DataBaseInIt(UserService userService) {

        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {

        userService.initializeUsers();
    }
}
