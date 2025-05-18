package com.example.demo.service;

import com.example.demo.model.service.UserServiceModel;

public interface UserService {
    void registerUser(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    void loginUser(String username, Long id);

    void logOut();

}
