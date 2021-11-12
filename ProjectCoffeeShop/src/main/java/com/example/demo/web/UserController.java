package com.example.demo.web;

import com.example.demo.models.binding.UserRegisterBindingModel;
import com.example.demo.models.entity.enums.RoleEntityNameEnum;
import com.example.demo.models.service.UserServiceModel;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.Set;

@Controller
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }


    @GetMapping("/register")
    public String registerUser(Model model){
        if (!model.containsAttribute("usernameExist")){
            model.addAttribute("usernameExist",false);
        }
        if (!model.containsAttribute("emailExist")){
            model.addAttribute("emailExist",false);
        }
        return "register";
    }


    @ModelAttribute
    public UserRegisterBindingModel userRegisterBindingModel(){
        return new UserRegisterBindingModel();
    }
    @PostMapping("/register")
    public String registerUserConfirm(@Valid UserRegisterBindingModel userRegisterBindingModel,
                                      BindingResult bindingResult,
                                      RedirectAttributes redirectAttributes){
        if (bindingResult.hasErrors() || !userRegisterBindingModel.getPassword().equals(userRegisterBindingModel.getConfirmPassword())){

            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userRegisterBindingModel",bindingResult);

            return "redirect:register";
        }
        if (userService.findByUsername(userRegisterBindingModel.getUsername())!= null){
            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel)
                    .addFlashAttribute("usernameExist",true);
                    return "redirect:register";

        }
        if (userService.findByEmail(userRegisterBindingModel.getEmail())!= null){
            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel", userRegisterBindingModel)
                    .addFlashAttribute("emailExist",true);
            return "redirect:register";
        }


        UserServiceModel user =modelMapper.map(userRegisterBindingModel, UserServiceModel.class);
        userService.createUser(user);



        return "redirect:login";
    }

    @GetMapping("/login")
    public String loginUser(){
        return "login";
    }

}
