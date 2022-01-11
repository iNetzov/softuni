package com.company;

public enum TestEnum {
    Test1(5), Test2(3), Test3(8);

    private int num;

    TestEnum(int num) {
        this.num = num;
    }

    public int getNum() {
        return num;
    }
}
