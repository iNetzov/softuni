package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class CronSchedulerDemo {

    private static final Logger LOGGER = LoggerFactory.getLogger(CronSchedulerDemo.class);

    @Scheduled(cron = "*/40 * * * * *")
    public void ShowTimeWithCron(){
        LOGGER.info("Cron {}",LocalDateTime.now());
    }


}
