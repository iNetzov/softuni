package com.example.demo;

import org.openjdk.jol.vm.VM;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
//        It is because == compare memory address and .equals compare string value and in java string are not on same memory address
      String str = new String("hello");
      String str1 = new String("hello");
      Integer i = new Integer(1);
      Integer i1 = new Integer(1);

        System.out.println(i.equals(i1));
        System.out.println(i== i1);
        System.out.println("Memory address Str:"+VM.current().addressOf(str));
        System.out.println("Memory address Str1:"+VM.current().addressOf(str1));
        System.out.println();
        System.out.println("Memory address i :"+VM.current().addressOf(i));
        System.out.println("Memory address i1:"+VM.current().addressOf(i1));

    }

}
