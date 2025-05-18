package com.company;

import java.time.DayOfWeek;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
       DayOfWeek[] days = DayOfWeek.values();
        for (DayOfWeek dayOfWeek : days) {
            System.out.println(dayOfWeek);
        }

    }
}
