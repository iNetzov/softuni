package com.example.demo.service;

import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.service.UserServiceModel;

public interface UserService {


    void createUser(UserServiceModel user);

    UserEntity findByUsername(String username);

    UserEntity findByEmail(String email);

    void initializeUsers();
}
