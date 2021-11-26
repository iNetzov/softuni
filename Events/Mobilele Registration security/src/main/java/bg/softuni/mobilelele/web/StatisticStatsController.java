package bg.softuni.mobilelele.web;

import bg.softuni.mobilelele.service.StatService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StatisticStatsController {

    private final StatService statService;
    public StatisticStatsController(StatService statService) {
        this.statService = statService;
    }

    @GetMapping("/statistics")
    public ModelAndView stats(){

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("stats",statService.getStats());
        modelAndView.setViewName("stats");
        return modelAndView;



    }
}
