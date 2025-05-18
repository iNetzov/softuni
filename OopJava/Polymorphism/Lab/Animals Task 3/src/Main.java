import animal.Animal;
import animal.Cat;
import animal.Dog;

public class Main {

    public static void main(String[] args) {
        Animal cat = new Cat("oscar","Wiskes");
        Animal dog = new Dog("Rocky","Meat");

        System.out.println(dog.explainSelf());
        System.out.println(cat.explainSelf());
    }
}
