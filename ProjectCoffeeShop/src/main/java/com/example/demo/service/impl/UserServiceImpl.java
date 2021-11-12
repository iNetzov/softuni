package com.example.demo.service.impl;

import com.example.demo.models.entity.RoleEntity;
import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.entity.enums.RoleEntityNameEnum;
import com.example.demo.models.service.UserServiceModel;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final RoleRepository roleRepository;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.roleRepository = roleRepository;
    }

    @Override
    public void createUser(UserServiceModel userServiceModel) {
        RoleEntity userRole = roleRepository.findByRole(RoleEntityNameEnum.USER);
        System.out.println();
        UserEntity user = modelMapper.map(userServiceModel,UserEntity.class);
        user.setPicUrl("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.subpng.com%2Fpng-9lw7jx%2F&psig=AOvVaw0c6sFiecNtCHsdCz5bBcVU&ust=1636762391519000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY_pvFkfQCFQAAAAAdAAAAABAD");
        Set<RoleEntity> roles = new HashSet<>();
        roles.add(userRole);

        user.setRoles(roles);
        userRepository.save(user);
    }

    @Override
    public UserEntity findByUsername(String username) {
       return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public UserEntity findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
