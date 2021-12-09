package com.example.demo.web;

import com.example.demo.service.OrderService;
import com.example.demo.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {

    private final OrderService orderService;
    private final UserService userService;

    public testController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }


    @GetMapping("/test")
    public String testSometing(){
  
      return "index";
    }
}
