package com.example.demo.web;

import com.example.demo.model.binding.ProductAddBindingModel;
import com.example.demo.model.service.ProductServiceModel;
import com.example.demo.service.ProductService;
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
@RequestMapping("/products")
public class ProductController {

    private final ModelMapper modelMapper;
    private final ProductService productService;

    public ProductController(ModelMapper modelMapper, ProductService productService) {
        this.modelMapper = modelMapper;
        this.productService = productService;
    }


    @GetMapping("/add")
    public String add(){
        return "product-add";
    }

    @ModelAttribute
    ProductAddBindingModel productAddBindingModel(){
        return new ProductAddBindingModel();
    }

    @PostMapping("/add")
    public String addConfirm(@Valid ProductAddBindingModel productAddBindingModel,
                             BindingResult bindingResult,
                             RedirectAttributes redirectAttributes){
        if (bindingResult.hasErrors()){

            redirectAttributes
                    .addFlashAttribute("productAddBindingModel",productAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.productAddBindingModel"
                            ,bindingResult);
            return "redirect:add";
        }
        ProductServiceModel productServiceModel = modelMapper.map(productAddBindingModel,ProductServiceModel.class);
        productServiceModel.setNeededBefore(productAddBindingModel.getBefore());
        productService.add(productServiceModel);

        return "redirect:/";
    }
}
