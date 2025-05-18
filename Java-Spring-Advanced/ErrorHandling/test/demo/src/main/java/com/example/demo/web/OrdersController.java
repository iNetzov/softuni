package com.example.demo.web;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class OrdersController {


    @GetMapping("/orders/{id}/details")
    public String productsDetails(@PathVariable("id") Long orderId){
        throw new ObjectNotFoundException(orderId);
    }

}
