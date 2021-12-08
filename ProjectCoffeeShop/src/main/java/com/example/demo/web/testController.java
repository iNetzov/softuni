package com.example.demo.web;

import org.hibernate.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {


    @GetMapping("/test")
    public String testSometing(){
      return "products-all";
    }
}
