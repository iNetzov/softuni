package com.company;

public  class CreateStudentCommand {

    public static Student createStudent(String[] data){
        String name = data[1];
        int age = Integer.parseInt(data[2]);
        double grade =Double.parseDouble(data[3]);
        return new Student(name, age, grade);

    }
}
