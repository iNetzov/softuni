package Inheritance;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public  class Person {
   private String name;
   private String address;

    public Person(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public void sleep(){
        System.out.println("Person cannot sleep is counting sheep Current sheep is: !"+ getRandSheep());
    }

    private int getRandSheep() {
        return ThreadLocalRandom.current().nextInt(100);
    }
}
