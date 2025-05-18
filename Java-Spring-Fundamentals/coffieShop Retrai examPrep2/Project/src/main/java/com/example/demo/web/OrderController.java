package com.example.demo.web;

import com.example.demo.model.binding.OrderAddBindingModel;
import com.example.demo.model.service.OrderServiceModel;
import com.example.demo.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    private final ModelMapper modelMapper;

    public OrderController(OrderService orderService, ModelMapper modelMapper) {
        this.orderService = orderService;
        this.modelMapper = modelMapper;
    }


    @ModelAttribute
    OrderAddBindingModel orderAddBindingModel(){
        return new OrderAddBindingModel();
    }



    @GetMapping("/add")
    public String orderAdd(){
        return "order-add";
    }

    @PostMapping("/add")
    public String orderAddConfirm(@Valid OrderAddBindingModel orderAddBindingModel,
                                  BindingResult bindingResult, RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){
            redirectAttributes
                    .addFlashAttribute("orderAddBindingModel",orderAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.orderAddBindingModel",bindingResult);

            return "redirect:add";
        }
        orderService.addOrder(modelMapper.map(orderAddBindingModel, OrderServiceModel.class));

        return "redirect:/";
    }

    @GetMapping("ready/{id}")
    public String ready(@PathVariable Long id){
        orderService.readyOrder(id);
        return "redirect:/";
    }
}
