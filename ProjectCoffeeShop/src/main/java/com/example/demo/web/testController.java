package com.example.demo.web;

import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.entity.enums.RoleEntityNameEnum;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.OrderService;
import com.example.demo.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {

    private final OrderService orderService;
    private final UserService userService;
    private final UserRepository userRepository;

    public testController(OrderService orderService, UserService userService, UserRepository userRepository) {
        this.orderService = orderService;
        this.userService = userService;
        this.userRepository = userRepository;
    }


    @GetMapping("/test")
    public String testSometing(){
        UserEntity moderator = userService.findByUsername("moderator");
        RoleEntityNameEnum role = RoleEntityNameEnum.USER;
        userService.updateUserRole(moderator,role);
        return "index";
    }
}
