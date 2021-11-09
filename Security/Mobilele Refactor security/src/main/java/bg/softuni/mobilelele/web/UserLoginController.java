package bg.softuni.mobilelele.web;

import bg.softuni.mobilelele.model.binding.UserLoginBindingModel;
import bg.softuni.mobilelele.model.binding.UserRegistrationBindingModel;
import bg.softuni.mobilelele.model.service.UserLoginServiceModel;
import bg.softuni.mobilelele.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class UserLoginController {

  private static Logger LOGGER = LoggerFactory.getLogger(UserLoginController.class);

  private final UserService userService;

  public UserLoginController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/users/login")
  public String login(Model model) {
    if (!model.containsAttribute("username")){
      model.addAttribute("username","");
    }
    if (!model.containsAttribute("error")){
      model.addAttribute("error",false);
    }


    return "auth-login";
  }


  @PostMapping("/users/login-error")
  public String loginError(
          @ModelAttribute(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY)String username
          ,RedirectAttributes redirectAttributes){
    redirectAttributes.addFlashAttribute("username",username)
            .addFlashAttribute("error",true);

    return "redirect:login";
  }



}
