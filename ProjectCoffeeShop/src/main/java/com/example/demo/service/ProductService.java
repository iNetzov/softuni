package com.example.demo.service;

import com.example.demo.models.entity.ProductEntity;
import com.example.demo.models.service.ProductServiceModel;

public interface ProductService {
    ProductEntity findByProductName(String name);

    void addProduct(ProductServiceModel productServiceModel);
}
