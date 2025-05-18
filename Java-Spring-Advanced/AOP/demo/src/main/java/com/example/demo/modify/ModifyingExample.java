package com.example.demo.modify;

import com.example.demo.basic.BasicExampleAspect;
import com.example.demo.basic.Student;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

@Component
@ConditionalOnProperty(name = "examples.modifying.enabled",havingValue = "true")
public class ModifyingExample implements CommandLineRunner {
    private final Student student;
    private static final Logger LOGGER = LoggerFactory.getLogger(ModifyingExample.class);


    public ModifyingExample(Student student) {
        this.student = student;
    }

    @Override
    public void run(String... args) throws Exception {
        String result = student.concat("a", "b");
        LOGGER.info("Result from: {}",result);
    }

}
