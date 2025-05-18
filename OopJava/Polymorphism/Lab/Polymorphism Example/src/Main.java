import math.Circle;
import math.Shape;
import zoo.*;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//        Animal Package

//        Animal animal = new Person();
//        if (animal instanceof Dinosaur) {
//            Dinosaur dino = (Dinosaur) animal;
//        } else if (animal instanceof Person) {
//            Person person = (Person) animal;
//            person.goToWork();
//        }
//
//    }

        //        Animal Package

//        Math Package
        Shape shape = new Circle();
        shape.printShape();
    }


    public static void feedAnimal(Animal animal) {
        animal.eat();
    }

    public static void petAnimal(Animal animal) {
        animal.makeSound();
    }
}
