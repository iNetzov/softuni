package com.example.demo.web;

import com.example.demo.model.binding.ShipAddBindingModel;
import com.example.demo.model.service.ShipServiceModel;
import com.example.demo.service.ShipService;
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
@RequestMapping("/ships")
public class ShipController {

    private final ModelMapper modelMapper;
    private final ShipService shipService;

    public ShipController(ModelMapper modelMapper, ShipService shipService) {
        this.modelMapper = modelMapper;
        this.shipService = shipService;
    }

    @GetMapping("/add")
    public String addShip(Model model){
        if (!model.containsAttribute("shipExist")){
            model.addAttribute("shipExist",false);
        }

        return "ship-add";
    }


    @ModelAttribute
    ShipAddBindingModel shipAddBindingModel(){
        return new ShipAddBindingModel();
    }

    @PostMapping("/add")
    public String addShipConfirm(@Valid ShipAddBindingModel shipAddBindingModel,
                                 BindingResult bindingResult,
                                 RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){

            redirectAttributes
                    .addFlashAttribute("shipAddBindingModel",shipAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.shipAddBindingModel",bindingResult);

            return "redirect:add";
        }
        if (shipService.findByName(shipAddBindingModel.getName())!=null){
            redirectAttributes
                    .addFlashAttribute("shipAddBindingModel",shipAddBindingModel)
                    .addFlashAttribute("shipExist",true);
            return "redirect:add";
        }
        shipService.addShip(modelMapper.map(shipAddBindingModel, ShipServiceModel.class));
        return "redirect:/";
    }
}
