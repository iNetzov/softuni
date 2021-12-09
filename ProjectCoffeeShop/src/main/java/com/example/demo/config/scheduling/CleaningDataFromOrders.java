package com.example.demo.config.scheduling;

import com.example.demo.service.LogService;
import com.example.demo.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
public class CleaningDataFromOrders {
    private static final Logger LOGGER = LoggerFactory.getLogger(CleaningDataFromOrders.class);
    private final OrderService orderService;
    private final LogService logService;

    public CleaningDataFromOrders(OrderService orderService, LogService logService) {
        this.orderService = orderService;
        this.logService = logService;
    }

    @Scheduled(cron = "*/25 * * * * *")
    public void MoveOrdersToLogs(){
        orderService.moveToLogs();

        LOGGER.info("Data transfer from orders --> logs at: {}", LocalDateTime.now());
    }

    @Scheduled(fixedRate = 300000)
    public void ShowTimeWithFixedRate(){
        logService.clear();
        LOGGER.info("Log data cleared at: {}", LocalDateTime.now());
    }


}
