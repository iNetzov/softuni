package com.example.demo.orderList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class BonusPointsGenerator {

    private Logger LOGGER = LoggerFactory.getLogger(BonusPointsGenerator.class);

    @EventListener(OrderCreatedEvent.class)
    public void onOrderCreated(OrderCreatedEvent orderCreatedEvent){
        LOGGER.info("ORDER no {} has been created i'm going to give bonus points to the user",orderCreatedEvent.getOrderId());

    //TODO:
    }

}
