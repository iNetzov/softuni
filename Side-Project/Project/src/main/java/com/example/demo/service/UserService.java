package com.example.demo.service;

import com.example.demo.models.service.UserServiceModel;

public interface UserService {


    void registerUser(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    void loginUser(Long id, String username);

    void logout();


    UserServiceModel findbyId(Long id);
}
