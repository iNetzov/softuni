package com.example.demo.service;

import com.example.demo.model.entity.User;
import com.example.demo.model.service.UserServiceModel;

public interface UserService {

    User findByUsername(String username);

    void registerUser(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    void loginUser(Long id, String username);

    void logout();

    User findById(Long id);

    User findByEmail(String email);
}
