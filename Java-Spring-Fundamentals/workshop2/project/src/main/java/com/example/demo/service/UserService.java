package com.example.demo.service;

import com.example.demo.model.entity.UserEntity;
import com.example.demo.model.service.UserServiceModel;

public interface UserService {
    void registerUser(UserServiceModel userServiceModel);

    UserServiceModel findUserByUsernameAndPassword(String username, String password);

    void loginUser(Long id, String username);

    void logout();

    UserServiceModel findById(Long id);

    boolean isNameExists(String username);

    UserEntity findCurrentLoginUserEntity();
}
