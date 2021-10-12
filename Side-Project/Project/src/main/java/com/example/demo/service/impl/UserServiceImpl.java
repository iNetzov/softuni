package com.example.demo.service.impl;

import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.entity.enums.LevelEnum;
import com.example.demo.models.service.UserServiceModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void registerUser(UserServiceModel userServiceModel) {
        UserEntity user = modelMapper.map(userServiceModel,UserEntity.class);
        user.setLevel(LevelEnum.BEGINNER);
        userRepository.save(user);
    }
}
