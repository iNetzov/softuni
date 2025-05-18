package com.company;

public class Main {

    public static void main(String[] args) {
        
        TestEnum[] testEnums = TestEnum.values();

        for (TestEnum testEnum : testEnums) {
            System.out.println(testEnum.getNum());
        }
    }
}
