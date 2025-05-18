package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        drowTheFigure(n);

    }

    public static void drowTheFigure(int n) {
        if (n > 1) {
            drowUpper(n);
            drowDown(n);
        } else {
            drowUpper(n);
        }

    }


    private static void drowUpper(int n) {
        for (int row = 1; row <= n; row++) {

            for (int spaces = 0; spaces < n - row; spaces++) {
                System.out.print(" ");

            }
            for (int starts = 0; starts < row; starts++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }


    private static void drowDown(int n) {
        for (int row = 1; row < n; row++) {
            for (int spaces = 0; spaces < row; spaces++) {
                System.out.print(" ");

            }
            for (int starts = 0; starts < n - row; starts++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
