package com.example.demo.service;

import com.example.demo.models.entity.User;
import com.example.demo.models.service.UserServiceModel;

public interface UserService {
    void registerUser(UserServiceModel userServiceModel);

    User findByUsername(String username);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    void loginUser(Long id, String username);

    void logoutUser();
}
