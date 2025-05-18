import math.Circle;
import math.Rectangle;
import math.Shape;

public class Main {

    public static void main(String[] args) {

        Shape first = new Circle(12D);
        Shape second = new Rectangle(10D,5D);


        System.out.println(second.calculatePerimeter());
        System.out.println(second.calculateArea());

        System.out.println(first.calculatePerimeter());
        System.out.println(first.calculateArea());

    }
}
