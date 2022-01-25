import math.MathOperation;
import math.Rectangle;
import math.Square;
import zoo.*;

import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        MathOperation math = new MathOperation();

        System.out.println(math.add(2,2));
        System.out.println(math.add(3,3,3));
        System.out.println(math.add(4,4,4,4));

        Rectangle square = new Square(1);
        Rectangle rectangle = new Rectangle(1,1);
        System.out.println(square.area());
        System.out.println(rectangle.area());

        try {
            new Dinosaur().makeSound();
        } catch (IOException e) {
            e.printStackTrace();
        }



    }
}
