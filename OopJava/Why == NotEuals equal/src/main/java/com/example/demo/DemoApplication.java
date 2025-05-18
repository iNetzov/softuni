package com.example.demo;

import org.openjdk.jol.vm.VM;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.rmi.dgc.VMID;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
////        It is because == compare memory address and .equals compare string value and in java string are not on same memory address
      String str = new String("hello");
      String str1 = new String("hello");
      Integer i = new Integer(1);
      Integer i1 = new Integer(1);

        System.out.println(i.equals(i1));
        System.out.println(i == i1);
        System.out.println(str == str1);
        System.out.println(str.equals(str1));
        System.out.println("Memory address Str:"+VM.current().addressOf(str));
        System.out.println("Memory address Str1:"+VM.current().addressOf(str1));
        System.out.println();
        System.out.println("Memory address i :"+VM.current().addressOf(i));
        System.out.println("Memory address i1:"+VM.current().addressOf(i1));


//        This is example of the string Pool in creates on background.
        String a = "a";
        String b = "a";
        String c = new String("a");
        System.out.println(VM.current().addressOf(a));
        System.out.println(VM.current().addressOf(b));
        System.out.println(VM.current().addressOf(c));

    }

}
