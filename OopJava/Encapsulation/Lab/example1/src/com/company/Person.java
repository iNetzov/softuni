package com.company;

public class Person {
    private int age;
    private String name;

    public Person(int age, String name) {
       this.setAge(age);
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        validateAge(age);
        this.age = age;
    }



    private void  validateAge(int age){
        if (age<0){
            throw new IllegalArgumentException("cannot be less then 0");
        }
    }
}

