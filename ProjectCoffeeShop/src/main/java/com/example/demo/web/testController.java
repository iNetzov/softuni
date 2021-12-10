package com.example.demo.web;

import com.example.demo.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {

    private final OrderService orderService;

    public testController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("/test")
    public String testSometing(){
//      orderService.moveToLogs();
      return "manage-users";
    }
}
