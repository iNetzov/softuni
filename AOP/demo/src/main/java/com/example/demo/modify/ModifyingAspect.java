package com.example.demo.modify;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Aspect
@Component
@ConditionalOnProperty(name = "examples.modifying.enabled",havingValue = "true")
public class ModifyingAspect {

    @Pointcut("execution(* com.example.demo.basic.Student.concat(..))")
    public void concatPointcut(){}

    @Around("concatPointcut() && args(a,b)")
    public Object modify( ProceedingJoinPoint pjp, String a, String b) throws Throwable {
        String modifiedArgument1 = "[" + a + "]";
        String modifiedArgument2 = "[" + b + "]";

        // call the method via th proceeding join point
        Object methodResult = pjp.proceed(new Object[]{
                modifiedArgument1,
                modifiedArgument2
        });

        return ("(" + methodResult  + ")");
    }



}
