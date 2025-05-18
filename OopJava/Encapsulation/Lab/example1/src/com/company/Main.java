package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Person person = new Person(73,"Martin");
        System.out.println(person.getAge());
        person.setAge(-14);
        System.out.println(person.getAge());


    }
}
