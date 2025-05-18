package com.company;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] cordinates = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        Point2D leftBottom = new Point2D(cordinates[0], cordinates[1]);
        Point2D topRight = new Point2D(cordinates[2], cordinates[3]);

        Rectangle rectangle = new Rectangle(leftBottom, topRight);
        int n = Integer.parseInt(scanner.nextLine());
        while (n-- > 0){
            cordinates = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

            Point2D newPoint = new Point2D(cordinates[0],cordinates[1]);
            System.out.println(rectangle.contains(newPoint));
        }

    }
}
