package com.example.demo.service.impl;

import com.example.demo.models.entity.OrderEntity;
import com.example.demo.models.entity.ProductEntity;
import com.example.demo.models.entity.StoreEntity;
import com.example.demo.models.entity.UserEntity;
import com.example.demo.models.service.OrderServiceModel;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductService;
import com.example.demo.service.StoreService;
import com.example.demo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    private final UserService userService;
    private final ProductService productService;
    private final StoreService storeService;
    private final ModelMapper modelMapper;
    private final OrderRepository orderRepository;

    public OrderServiceImpl(UserService userService, ProductService productService, StoreService storeService, ModelMapper modelMapper, OrderRepository orderRepository) {
        this.userService = userService;
        this.productService = productService;
        this.storeService = storeService;
        this.modelMapper = modelMapper;
        this.orderRepository = orderRepository;
    }


    @Override
    public OrderServiceModel createOrderServiceModel(String username, String productName, String storeName) {
        OrderServiceModel orderServiceModel = new OrderServiceModel();
        UserEntity creator = userService.findByUsername(username);
        ProductEntity product = productService.findByProductName(productName);
        StoreEntity store = storeService.findByName(storeName);
        orderServiceModel.setCustomer(creator);
        orderServiceModel.setProduct(product);
        orderServiceModel.setStore(store);
        return orderServiceModel;
    }

    @Override
    public void addOrder(OrderServiceModel order) {
        OrderEntity orderEntity = modelMapper.map(order,OrderEntity.class);
        orderRepository.save(orderEntity);
    }
}
