package com.example.demo.web;

import com.example.demo.models.binding.ProductAddBindingModel;
import com.example.demo.models.service.ProductServiceModel;
import com.example.demo.service.ProductService;
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
@RequestMapping("/products")
public class ProductsController {

    private final ProductService productService;
    private final ModelMapper modelMapper;

    public ProductsController(ProductService productService, ModelMapper modelMapper) {
        this.productService = productService;
        this.modelMapper = modelMapper;
    }


    @GetMapping("/add")
    public String addProduct(Model model){
        if (!model.containsAttribute("nameExist")){
            model.addAttribute("nameExist",false);
        }


        return "products-add";
    }

    @ModelAttribute
    public ProductAddBindingModel productAddBindingModel(){
        return new ProductAddBindingModel();
    }

    @PostMapping("/add")
    public String addProductConfirm(@Valid ProductAddBindingModel productAddBindingModel,
                                    BindingResult bindingResult,
                                    RedirectAttributes redirectAttributes){
       if (productService.findByProductName(productAddBindingModel.getName()) != null){

           redirectAttributes.addFlashAttribute("productAddBindingModel",productAddBindingModel)
                   .addFlashAttribute("nameExist",true)
                   .addFlashAttribute("org.springframework.validation.BindingResult.productAddBindingModel",bindingResult);
           return "redirect:add";
       }
        if (bindingResult.hasErrors()){
            redirectAttributes.addFlashAttribute("productAddBindingModel",productAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.productAddBindingModel",bindingResult);
            return "redirect:add";
        }
        ProductServiceModel productServiceModel = modelMapper.map(productAddBindingModel, ProductServiceModel.class);
        System.out.println();
        productService.addProduct(productServiceModel);
        return "redirect:/";
    }




}
