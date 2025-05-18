package com.example.demo.basic;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(name = "example.basic.enabled",havingValue = "true")
public class BasicExample implements CommandLineRunner {

    private final Student student;

    public BasicExample(Student student) {
        this.student = student;
    }

    @Override
    public void run(String... args) throws Exception {

        student.sayHello();
        student.echo("IVAILO");
        student.concat("a", "b");
        try {
            student.boom();
        } catch (Exception ex) {

        }
    }
}
