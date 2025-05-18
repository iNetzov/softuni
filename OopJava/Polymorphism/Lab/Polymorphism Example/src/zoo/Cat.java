package zoo;

public class Cat extends Mammal{
    @Override
    public void eat() {
        System.out.println("Cat eating");
    }

    @Override
    public void makeSound() {
        System.out.println("mrrrrr mrrrr");
    }
}
