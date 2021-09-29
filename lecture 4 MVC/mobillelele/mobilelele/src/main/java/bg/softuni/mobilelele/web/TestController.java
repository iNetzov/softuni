package bg.softuni.mobilelele.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {

    @GetMapping("/test")
    public ModelAndView test(ModelAndView modelAndView){
        modelAndView.addObject("line","<h2>line 2</h2>");
        modelAndView.addObject("personToGreed","Banda");
        modelAndView.setViewName("test");
        return modelAndView;
    }
}
