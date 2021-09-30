package bg.softuni.mobilelele.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {

    @GetMapping("/test")
    public ModelAndView test(ModelAndView modelAndView,@RequestParam(value = "name",defaultValue = "misho")String name){

        modelAndView.addObject("personToGreed",name);
        modelAndView.setViewName("test");
        return modelAndView;
    }
}
