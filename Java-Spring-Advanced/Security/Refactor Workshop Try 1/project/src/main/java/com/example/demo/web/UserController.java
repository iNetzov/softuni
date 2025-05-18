package com.example.demo.web;

import com.example.demo.model.binding.UserLoginBindingModel;
import com.example.demo.model.binding.UserRegisterBindingModel;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.model.service.UserServiceModel;
import com.example.demo.model.view.UserViewModel;
import com.example.demo.service.UserService;
import com.example.demo.util.CurrentUser;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
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

    @ModelAttribute
    public UserRegisterBindingModel userRegisterBindingModel(){
        return new UserRegisterBindingModel();
    }

    @ModelAttribute
    public UserLoginBindingModel userLoginBindingModel(){return new UserLoginBindingModel();}

    @GetMapping("/register")
    public String registerGet(Model model){

        return "register";
    }

    @PostMapping("/register")
    public String registerConfirm(@Valid UserRegisterBindingModel userRegisterBindingModel,
                                  BindingResult bindingResult, RedirectAttributes redirectAttributes){
        if (bindingResult.hasErrors() || !userRegisterBindingModel.getPassword().equals(userRegisterBindingModel.getConfirmPassword()) ){
            redirectAttributes
                    .addFlashAttribute("userRegisterBindingModel",userRegisterBindingModel);
            redirectAttributes
                    .addFlashAttribute("org.springframework.validation.BindingResult.userRegisterBindingModel"
                            ,bindingResult);
            return "redirect:register";
        }
       boolean isNameExists = userService.isNameExists(userRegisterBindingModel().getUsername());
        if (isNameExists){
            //Todo... redirect with message
        }
        userService.registerUser(modelMapper
                .map(userRegisterBindingModel, UserServiceModel.class));
        return  "redirect:login";
    }

    @GetMapping("/login")
    public String login(Model model){
        model.addAttribute("isExist",true);

        return "login";
    }
    @PostMapping("/login")
    public String loginConfirm(@Valid UserLoginBindingModel userLoginBindingModel,
                               BindingResult bindingResult,RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){
            redirectAttributes
                    .addFlashAttribute("userLoginBindingModel",userLoginBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBindingModel",
                            bindingResult);
            return "redirect:login";
        }
        UserServiceModel user = userService.findUserByUsernameAndPassword(
                userLoginBindingModel.getUsername(),
                userLoginBindingModel.getPassword());
        if (user == null){
            redirectAttributes
                    .addFlashAttribute("isExist",false)
                    .addFlashAttribute("userLoginBindingModel",userLoginBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.userLoginBindingModel",
                            bindingResult);
            return "redirect:login";
        }
        userService.loginUser(user.getId(),user.getUsername());
        return "redirect:/";
    }

    @GetMapping("/logout")
    public String logout(){
        userService.logout();
        return "redirect:/";
    }

    @GetMapping("/profile/{id}")
    private String profile(@PathVariable Long id,Model model){
        model.addAttribute("user",modelMapper
                        .map(userService.findById(id), UserViewModel.class));
        return "profile";
    }




}
