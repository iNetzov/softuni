package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentService {

  private final Logger LOGGER = LoggerFactory.getLogger(StudentService.class);

    @Cacheable("students")
    public List<Student> findAllStudents(){
        LOGGER.info("i am doing some comlicated Stuff ...");
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        LOGGER.info("i am done");

        return List.of(
                new Student(1L,"Pesho",34),
                new Student(2L,"Anna",35)
        );
    }
}
