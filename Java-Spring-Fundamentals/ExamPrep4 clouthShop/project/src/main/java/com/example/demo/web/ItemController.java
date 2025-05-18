package com.example.demo.web;

import com.example.demo.models.binding.ItemAddBindingModel;
import com.example.demo.models.service.ItemServiceModel;
import com.example.demo.service.ItemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;


@Controller
@RequestMapping("/items")
public class ItemController {

    private final ModelMapper modelMapper;
    private final ItemService itemService;

    public ItemController(ModelMapper modelMapper, ItemService itemService) {
        this.modelMapper = modelMapper;
        this.itemService = itemService;
    }

    @GetMapping("/add")
    public String add(){
        return "add-item";
    }

    @ModelAttribute
    public ItemAddBindingModel itemAddBindingModel(){
        return new ItemAddBindingModel();
    }

    @PostMapping("/add")
    public String addConfirm(@Valid ItemAddBindingModel itemAddBindingModel,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){

            redirectAttributes
                    .addFlashAttribute("itemAddBindingModel",itemAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.itemAddBindingModel"
                            ,bindingResult);
            return "redirect:add";
        }
        ItemServiceModel itemServiceModel= modelMapper.map(itemAddBindingModel,ItemServiceModel.class);
        itemService.addItem(itemServiceModel);

        return "redirect:/";

    }
}
