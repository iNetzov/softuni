package com.example.demo.service;

import com.example.demo.model.entity.User;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.model.view.UserViewModel;

import java.util.List;

public interface UserService {
    void registerUser(UserServiceModel userServiceModel);

    UserServiceModel findByIdAndPassword(String username, String password);

    void loginUser(long id, String username);

    User findById(Long id);

    void logOut();

    List<UserViewModel> findAllUserAndCountOfOrdersByCountDESC();

}
