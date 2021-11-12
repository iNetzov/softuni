package com.example.demo.config.inIt;

import com.example.demo.service.RoleService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
public class DataBaseInIt implements CommandLineRunner {

    private final RoleService roleService;

    public DataBaseInIt(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public void run(String... args) throws Exception {

        roleService.initializeRoles();
    }
}
