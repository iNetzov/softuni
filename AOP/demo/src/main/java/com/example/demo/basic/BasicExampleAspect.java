package com.example.demo.basic;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class BasicExampleAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(BasicExampleAspect.class);


    @Pointcut("execution(* com.example.demo.basic.Student.*(..))")
    public void track() {

    }

    @Before("track()")
    public void beforeAnyMethod(JoinPoint joinPoint) {
        LOGGER.info("Before calling: {} ", joinPoint.getSignature());
    }

    @Pointcut("execution(* com.example.demo.basic.Student.echo(..))")
    public void trackEcho() {
    }

    @Before("trackEcho()")
    public void beforeEchoMethod(JoinPoint joinPoint) {
        LOGGER.info("Before calling echo: {}", joinPoint.getTarget());
    }

    @AfterThrowing(pointcut = "track()",throwing = "error")
    public void trackExceptions(Throwable error){
        LOGGER.info("Error:{}",error.getMessage());
    }


}
