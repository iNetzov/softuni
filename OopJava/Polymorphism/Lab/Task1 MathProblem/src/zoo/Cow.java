package zoo;

public class Cow extends Mammal{
    @Override
    public void eat() {
        System.out.println("|Cow eating");
    }

    @Override
    public void makeSound() {
        System.out.println("Muuuuuu muuuuuu");
    }

}
