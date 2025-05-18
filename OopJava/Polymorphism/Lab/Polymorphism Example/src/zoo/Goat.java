package zoo;

public class Goat extends Mammal{
    @Override
    public void eat() {
        System.out.println("Eating grass");
    }

    @Override
    public void makeSound() {
        System.out.println("Beeeeee");
    }

    public void goat(){
        System.out.println("i am a goat");
    }
}
