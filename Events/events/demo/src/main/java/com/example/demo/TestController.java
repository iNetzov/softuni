package com.example.demo;

import com.example.demo.orderList.OrderCreatedEvent;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class TestController {

    private final ApplicationEventPublisher eventPublisher;

    public TestController(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    @GetMapping("/test")
    public String test(){
        return "test";
    }

    @GetMapping("/create-order")
    public String createOrder(){
        ApplicationEvent event = new OrderCreatedEvent(this, UUID.randomUUID().toString());
        eventPublisher.publishEvent(event);
        return "test";
    }
}
