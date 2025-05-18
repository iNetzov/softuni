package com.example.demo.service.impl;

import com.example.demo.models.entity.RoleEntity;
import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.entity.enums.RoleEntityNameEnum;
import com.example.demo.models.service.UserServiceModel;
import com.example.demo.models.view.UserManageViewModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;
    private final String PASSWORD ="12345";
    private final String USER_PIC_URL ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.subpng.com%2Fpng-9lw7jx%2F&psig=AOvVaw0c6sFiecNtCHsdCz5bBcVU&ust=1636762391519000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCY_pvFkfQCFQAAAAAdAAAAABAD";

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void createUser(UserServiceModel userServiceModel) {
        RoleEntity userRole = roleService.findByRole(RoleEntityNameEnum.USER);
        UserEntity user = modelMapper.map(userServiceModel,UserEntity.class);
        user.setPassword(passwordEncoder.encode(userServiceModel.getPassword()));
        user.setPicUrl(USER_PIC_URL);
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

    @Override
    public void initializeUsers() {
        userRepository.saveAll(createUsersIfDatabaseIsEmpty());
    }

    @Transactional
    @Override
    public Optional<UserEntity> updateUser(long userId, String fullName) {
        return userRepository.findById(userId).map(target -> {
            target.setFullName(fullName);
            return target;
        });
    }

    @Override
    public List<UserManageViewModel> findAllUsers() {
        List<UserEntity> allEntityUsers = userRepository.findAll();
        return allEntityUsers
                .stream()
                .map(this::map)
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public void updateUserRole(UserEntity user, RoleEntityNameEnum newRole) {
       RoleEntity role = roleService.findByRole(newRole);
       Set<RoleEntity> futureRoles = new HashSet<>();
       futureRoles.add(role);

       userRepository.findById(user.getId()).map(target->{
           target.setRoles(futureRoles);
           return target;
       });


    }

    @Override
    public List<UserEntity> findAllUsersEntity() {
       return userRepository.findAll();

    }



    private UserManageViewModel map(UserEntity user) {
        return this.modelMapper
                .map(user, UserManageViewModel.class);
    }
    private List<UserEntity> createUsersIfDatabaseIsEmpty(){
        List<UserEntity> userList = new ArrayList<>();
        if (userRepository.count() == 0) {
            roleService.initializeRoles();
            RoleEntity adminRole = roleService.findByRole(RoleEntityNameEnum.ADMIN);
            RoleEntity moderatorRole = roleService.findByRole(RoleEntityNameEnum.MODERATOR);
            RoleEntity userRole = roleService.findByRole(RoleEntityNameEnum.USER);

            UserEntity admin = new UserEntity();
            admin.setUsername("admin");
            admin.setPassword(passwordEncoder.encode(PASSWORD));
            admin.setFullName("Ivailo Netzov");
            admin.setPicUrl(USER_PIC_URL);
            admin.setEmail("admin@Gmail.com");
            admin.setRoles(Set.of(adminRole));
            userList.add(admin);

            UserEntity moderator = new UserEntity();
            moderator.setUsername("moderator");
            moderator.setPassword(passwordEncoder.encode(PASSWORD));
            moderator.setFullName("Liliq Kerezova");
            moderator.setPicUrl(USER_PIC_URL);
            moderator.setEmail("moderator@Gmail.com");
            moderator.setRoles(Set.of(moderatorRole));
            userList.add(moderator);

            UserEntity userAcc = new UserEntity();
            userAcc.setUsername("userAcc");
            userAcc.setPassword(passwordEncoder.encode(PASSWORD));
            userAcc.setFullName("Vesselin Netzov");
            userAcc.setPicUrl(USER_PIC_URL);
            userAcc.setEmail("user@Gmail.com");
            userAcc.setRoles(Set.of(userRole));
            userList.add(userAcc);
        }
            return userList;
    }


}
