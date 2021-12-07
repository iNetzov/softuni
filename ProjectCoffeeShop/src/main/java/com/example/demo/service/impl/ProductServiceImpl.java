package com.example.demo.service.impl;

import com.example.demo.models.entity.ProductEntity;
import com.example.demo.models.service.ProductServiceModel;
import com.example.demo.repository.ProductRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;
    private final CategoryService categoryService;

    public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper, CategoryService categoryService) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
        this.categoryService = categoryService;
    }

    @Override
    public ProductEntity findByProductName(String name) {
        ProductEntity product = productRepository.findByName(name).orElse(null);
        return product;
    }

    @Override
    public void addProduct(ProductServiceModel productServiceModel) {
        ProductEntity product = modelMapper.map(productServiceModel,ProductEntity.class);
        product.setCategory(categoryService.findByCategoryNameEnum(productServiceModel.getCategory()));
        System.out.println();

        productRepository.save(product);
    }
}
