package com.example.demo.service.impl;

import com.example.demo.model.entity.User;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.model.view.UserViewModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.utils.CurrentUser;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
        User user = modelMapper.map(userServiceModel, User.class);
        userRepository.save(user);
    }

    @Override
    public UserServiceModel findByIdAndPassword(String username, String password) {
       return userRepository
               .findByUsernameAndPassword(username,password)
               .map(user->modelMapper.map(user,UserServiceModel.class)).orElse(null);

    }

    @Override
    public void loginUser(long id, String username) {
        currentUser.setUsername(username);
        currentUser.setId(id);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public void logOut() {
        currentUser.setId(null);
        currentUser.setUsername(null);
    }

    @Override
    public List<UserViewModel> findAllUserAndCountOfOrdersByCountDESC() {
        return userRepository.findAllByOrdersCountDescending()
                .stream()
                .map(user -> {
                    UserViewModel userViewModel = new UserViewModel();
                    userViewModel.setUsername(user.getUsername());
                    userViewModel.setCountOfOrders(user.getOrder().size());
                    return userViewModel;
                }).collect(Collectors.toList());
    }
}
