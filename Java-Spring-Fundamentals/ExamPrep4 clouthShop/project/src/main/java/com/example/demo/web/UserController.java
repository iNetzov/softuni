package com.example.demo.web;

import com.example.demo.models.binding.UserLoginBindingModel;
import com.example.demo.models.binding.UserRegisterBindingModel;
import com.example.demo.models.service.UserServiceModel;
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


    //REGISTER
    @GetMapping("/register")
    public String register(Model model){
        if (!model.containsAttribute("UserExist")){
            model.addAttribute("UserExist",false);
        }
        return "register";
    }


    @ModelAttribute
    public UserRegisterBindingModel userRegisterBindingModel(){
        return new UserRegisterBindingModel();
    }

    @PostMapping("/register")
    public String registerConfirm(@Valid UserRegisterBindingModel userRegisterBindingModel,
                                  BindingResult bindingResult, RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors() || !userRegisterBindingModel.getPassword().equals(userRegisterBindingModel.getConfirmPassword())){

            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userRegisterBindingModel"
                            ,bindingResult);
            return "redirect:register";
        }
        //check if user is containt in the database
        if (userService.findByUsername(userRegisterBindingModel.getUsername()) !=null){
            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel)
                    .addFlashAttribute("UserExist",true);
            return "redirect:register";
        }
        //check if user is containt in the database

        userService.registerUser(modelMapper.map(userRegisterBindingModel, UserServiceModel.class));
        return "redirect:login";
    }


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
                               BindingResult bindingResult ,
                               RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){

            redirectAttributes
                    .addFlashAttribute("userLoginBindingModel",userLoginBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBindingModel"
                            ,bindingResult);
            return "redirect:login";
        }

        UserServiceModel userServiceModel = userService
                .findByUsernameAndPassword(
                        userLoginBindingModel.getUsername(),
                        userLoginBindingModel.getPassword());

        if (userServiceModel == null){
           redirectAttributes
                   .addFlashAttribute("userLoginBindingModel",userLoginBindingModel)
                   .addFlashAttribute("isExist",false);
           return "redirect:login";
        }
        userService.loginUser(userServiceModel.getId(),userServiceModel.getUsername());
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(){
        userService.logoutUser();
        return "redirect:/";
    }

}
