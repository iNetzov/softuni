package com.example.demo.service.impl;

import com.example.demo.model.entity.UserEntity;
import com.example.demo.model.entity.enums.LevelEnum;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.util.CurrentUser;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final CurrentUser currentUser;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, CurrentUser currentUser) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.currentUser = currentUser;
    }

    @Override
    public void registerUser(UserServiceModel userServiceModel) {
        UserEntity user = modelMapper.map(userServiceModel,UserEntity.class);
        user.setLevel(LevelEnum.BEGINNER);
        userRepository.save(user);
    }

    @Override
    public UserServiceModel findUserByUsernameAndPassword(String username, String password) {
        return userRepository
                .findByUserNameAndPassword(username,password)
                .map(UserEntity -> modelMapper.map(UserEntity,UserServiceModel.class))
                .orElse(null);
    }

    @Override
    public void loginUser(Long id, String username) {
            currentUser.setUsername(username);
            currentUser.setId(id);
    }

    @Override
    public void logout() {
        currentUser.setId(null);
        currentUser.setUsername(null);
    }

    @Override
    public UserServiceModel findById(Long id) {
         return userRepository.findById(id).map(UserEntity->modelMapper
                .map(UserEntity,UserServiceModel.class))
                 .orElse(null);
    }

    @Override
    public boolean isNameExists(String username) {
        return userRepository.findByUserName(username).isPresent();
    }

    @Override
    public UserEntity findCurrentLoginUserEntity() {
        return userRepository.findById(currentUser.getId())
                .orElse(null);
    }

}
