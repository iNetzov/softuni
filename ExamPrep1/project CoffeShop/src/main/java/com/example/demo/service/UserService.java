package com.example.demo.service;

import com.example.demo.model.entity.User;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.model.view.UserViewModel;

import java.util.List;

public interface UserService {
    UserServiceModel registerUser(UserServiceModel userServiceModel);

    UserServiceModel findByUsernameAndPassword(String username, String password);

    void loginUser(Long id, String username);

    void logout();

    User findById(Long id);

    List<UserViewModel> findAllUserAndCountOfOrdersByCountDesc();
}
