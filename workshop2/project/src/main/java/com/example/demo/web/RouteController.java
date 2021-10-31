package com.example.demo.web;

import com.example.demo.model.binding.RouteAddBindingModel;
import com.example.demo.model.service.RouteServiceModel;
import com.example.demo.model.view.RouteViewModel;
import com.example.demo.service.RouteService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/routes")
public class RouteController {

    private final RouteService routeService;
    private final ModelMapper modelMapper;

    public RouteController(RouteService routeService, ModelMapper modelMapper) {
        this.routeService = routeService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/all")
    public String allRoutes(Model model){

        List<RouteViewModel> routeViewModels =routeService.findAllRoutesView();
        model.addAttribute("routes",routeViewModels);

        return "routes";
    }

    @GetMapping("/add")
    public String addRoutes(){
        return "add-route";
    }

    @ModelAttribute
    RouteAddBindingModel routeAddBindingModel(){
        return new RouteAddBindingModel();
    }

    @PostMapping("/add")
    public String addRoutesConfirm(@Valid
                                   RouteAddBindingModel routeAddBindingModel,
                                   BindingResult bindingResult,
                                   RedirectAttributes redirectAttributes) throws IOException {

        if (bindingResult.hasErrors()){
            redirectAttributes
                    .addFlashAttribute("routeAddBindingModel",routeAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.routeAddBindingModel"
                            ,bindingResult);
            return "redirect:add";
        }
        RouteServiceModel routeServiceModel= modelMapper.map(routeAddBindingModel,RouteServiceModel.class);
        routeServiceModel.setGpxCoordinate(new String(routeAddBindingModel.getGpxCoordinates().getBytes()));
        routeService.addNewRoute(routeServiceModel);

        return "redirect:all";
    }

    @GetMapping("/details/{id}")
    public String details(@PathVariable Long id,Model model){

        model.addAttribute("route",routeService.findRouteById(id));


        return "route-details";
    }

}
