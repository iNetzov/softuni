package com.example.demo.service;

import com.example.demo.models.entity.LogEntity;

public interface LogService {
    void addToLog(LogEntity logEntity);

    void clear();
}
