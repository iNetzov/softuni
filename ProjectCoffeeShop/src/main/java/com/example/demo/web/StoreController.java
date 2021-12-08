package com.example.demo.web;

import com.example.demo.models.binding.StoreAddBindingModel;
import com.example.demo.models.entity.StoreEntity;
import com.example.demo.models.service.StoreServiceModel;
import com.example.demo.models.view.StoresAllViewModel;
import com.example.demo.service.StoreService;
import org.dom4j.rule.Mode;
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
import java.util.List;

@Controller
@RequestMapping("/stores")
public class StoreController {

    private final StoreService storeService;
    private final ModelMapper modelMapper;

    public StoreController(StoreService storeService, ModelMapper modelMapper) {
        this.storeService = storeService;
        this.modelMapper = modelMapper;
    }


    @GetMapping("/add")
    public String addStore(Model model) {
        if (!model.containsAttribute("nameExist")) {
            model.addAttribute("nameExist", false);
        }
        return "stores-add";
    }

    @ModelAttribute
    public StoreAddBindingModel storeAddBindingModel() {
        return new StoreAddBindingModel();
    }

    @PostMapping("/add")
    public String addStoreConfirm(@Valid StoreAddBindingModel storeAddBindingModel,
                                  BindingResult bindingResult,
                                  RedirectAttributes redirectAttributes) {
        StoreEntity storeEntity = storeService.findByName(storeAddBindingModel.getName());
        if (storeEntity != null) {
            redirectAttributes.addFlashAttribute("nameExist", true).
                    addFlashAttribute("storeAddBindingModel", storeAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.storeAddBindingModel", bindingResult);
            return "redirect:add";
        }
        if (bindingResult.hasErrors()) {
            redirectAttributes.addFlashAttribute("storeAddBindingModel", storeAddBindingModel)
                    .addFlashAttribute("org.springframework.validation.BindingResult.storeAddBindingModel", bindingResult);
            return "redirect:add";
        }


        storeService.addStore(modelMapper.map(storeAddBindingModel, StoreServiceModel.class));


        return "redirect:/";
    }

    @GetMapping("/all")
    public String allStores(Model model){
        List<StoresAllViewModel> allStores = storeService.getAllStores();
        model.addAttribute("allStores",allStores);

        return "store-all";
        }


}


