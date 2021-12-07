package com.example.demo.service.impl;

import com.example.demo.models.entity.StoreEntity;
import com.example.demo.models.service.StoreServiceModel;
import com.example.demo.repository.StoreRepository;
import com.example.demo.service.StoreService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;
    private final ModelMapper modelMapper;

    public StoreServiceImpl(StoreRepository storeRepository, ModelMapper modelMapper) {
        this.storeRepository = storeRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public StoreEntity findByName(String name) {
        return storeRepository.findByName(name).orElse(null);
    }


    @Override
    public void addStore(StoreServiceModel storeServiceModel) {
    StoreEntity store = modelMapper.map(storeServiceModel,StoreEntity.class);

    storeRepository.save(store);
    }
}
