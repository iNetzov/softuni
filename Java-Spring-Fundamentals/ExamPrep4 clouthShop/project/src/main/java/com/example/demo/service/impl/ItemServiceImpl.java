package com.example.demo.service.impl;

import com.example.demo.models.entity.Item;
import com.example.demo.models.service.ItemServiceModel;
import com.example.demo.repository.ItemRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ItemService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    private final ModelMapper modelMapper;
    private final ItemRepository itemRepository;
    private final CategoryService categoryService;

    public ItemServiceImpl(ModelMapper modelMapper, ItemRepository itemRepository, CategoryService categoryService) {
        this.modelMapper = modelMapper;
        this.itemRepository = itemRepository;
        this.categoryService = categoryService;
    }


    @Override
    public void addItem(ItemServiceModel itemServiceModel) {
        Item item = modelMapper.map(itemServiceModel,Item.class);
        item.setCategory(categoryService.findByName(itemServiceModel.getCategory()));
        itemRepository.save(item);
    }
}
