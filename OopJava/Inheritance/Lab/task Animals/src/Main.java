import animals.Animal;
import animals.Cat;
import animals.Dog;
import animals.Puppy;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {


        Dog dog = new Dog();
        dog.bark();
        dog.eat();
        Puppy puppy = new Puppy();
        puppy.weep();
        Cat cat = new Cat();
        List<Animal> animals = new ArrayList<>();

        animals.add(dog);
        animals.add(puppy);
        animals.add(cat);

//
//
        List<Dog> dogs = new ArrayList<>();
        dogs.add(dog);
        dogs.add(puppy);
//        cant inherid cat becouse it is not a dog
//        dogs.add(cat);


    }
}
