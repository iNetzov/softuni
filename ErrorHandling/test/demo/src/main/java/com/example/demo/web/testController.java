package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class testController {

    @GetMapping("/test")
    public String test(){
        if (true){
            throw new NullPointerException("WoW i did it wrong ");
        }
        return "hello";
    }

}
