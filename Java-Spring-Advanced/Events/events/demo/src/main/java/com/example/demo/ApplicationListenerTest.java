package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.ServletRequestHandledEvent;

import java.time.LocalDate;

@Component
public class ApplicationListenerTest {

    private final Logger LOGGER = LoggerFactory.getLogger(ApplicationListenerTest.class);


    @EventListener(ServletRequestHandledEvent.class)
    public void onApplicationEvent(ServletRequestHandledEvent event) {
        LOGGER.info("this is an event: {}", event);
    }
}
