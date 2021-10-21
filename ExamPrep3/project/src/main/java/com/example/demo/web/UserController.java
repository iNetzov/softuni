package com.example.demo.web;

import com.example.demo.model.binding.UserLoginBindingModel;
import com.example.demo.model.binding.UserRegisterBindingModel;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }


    //Register
    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @ModelAttribute
    UserRegisterBindingModel userRegisterBindingModel(){
        return new UserRegisterBindingModel();
    }

    @PostMapping("/register")
    public String registerConfirm(@Valid UserRegisterBindingModel userRegisterBindingModel,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes){
        if (bindingResult.hasErrors() || !userRegisterBindingModel.getPassword().equals(userRegisterBindingModel.getConfirmPassword())){

            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userRegisterBindingModel"
                            ,bindingResult);
            return "redirect:register";
        }
        userService.registerUser(modelMapper.map(userRegisterBindingModel,UserServiceModel.class));

        return "redirect:login";
    }
    //Register


    //LOGIN
    @GetMapping("/login")
    public String login(Model model){
        if (!model.containsAttribute("isExist")){
            model.addAttribute("isExist",true);

        }
        return "login";
    }

    @ModelAttribute
    UserLoginBindingModel userLoginBindingModel(){
        return new UserLoginBindingModel();
    }


    @PostMapping("/login")
    public String loginConfirm(@Valid UserLoginBindingModel userLoginBindingModel,
                               BindingResult bindingResult,
                               RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {

            redirectAttributes
                    .addFlashAttribute("userLoginBindingModel", userLoginBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBindingModel"
                            , bindingResult);

            return "redirect:login";
        }
        UserServiceModel userServiceModel = userService.findByUsernameAndPassword(userLoginBindingModel.getUsername(),userLoginBindingModel.getPassword());

        if (userServiceModel == null){
            redirectAttributes
                    .addFlashAttribute("isExist",false)
                    .addFlashAttribute("userLoginBindingModel",userLoginBindingModel);
            return "redirect:login";
        }
        userService.loginUser(userServiceModel.getUsername(),userServiceModel.getId());
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(){
        userService.logOut();

        return "redirect:/";
    }



}
