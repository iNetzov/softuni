package zoo;

public class Person extends Mammal{



    @Override
    public void eat() {
        System.out.println("Person Eats");
    }

    @Override
    public void makeSound() {
        System.out.println("Offf");
    }

    public void goToWork(){
        System.out.println("Going to work :(");
    }
}
