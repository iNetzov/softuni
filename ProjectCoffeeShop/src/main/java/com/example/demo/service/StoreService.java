package com.example.demo.service;

import com.example.demo.models.entity.StoreEntity;
import com.example.demo.models.service.StoreServiceModel;

public interface StoreService {
    StoreEntity findByName(String name);

    void addStore(StoreServiceModel storeServiceModel);
    void initStores();
}
