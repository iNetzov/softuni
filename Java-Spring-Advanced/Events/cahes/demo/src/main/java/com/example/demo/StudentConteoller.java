package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentConteoller {

    private final StudentService studentService;

    public StudentConteoller(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping("/students")
    public List<Student> findAll(){
        return studentService.findAllStudents();
    }

}
