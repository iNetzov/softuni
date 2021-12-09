package com.example.demo.service.impl;

import com.example.demo.models.entity.LogEntity;
import com.example.demo.repository.LogRepository;
import com.example.demo.service.LogService;
import org.springframework.stereotype.Service;

@Service
public class LogServiceImpl  implements LogService {
    private final LogRepository logRepository;

    public LogServiceImpl(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @Override
    public void addToLog(LogEntity logEntity) {
        logRepository.save(logEntity);
    }

    @Override
    public void clear() {
        logRepository.deleteAll();
    }
}
