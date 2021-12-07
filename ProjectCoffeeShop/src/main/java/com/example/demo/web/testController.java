package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {


    @GetMapping("/test")
    public String testSometing(){
        return "test";
    }
}
