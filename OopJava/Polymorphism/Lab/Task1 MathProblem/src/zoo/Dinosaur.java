package zoo;

import java.io.IOException;

public class Dinosaur extends ColdBlooded {

    @Override
    public void eat() {
        System.out.println("Dinosaurs eating");
    }

    @Override
    public void makeSound() throws IOException {
        System.out.println("Arrrrrr Arrrrrr");
    }
    public void dino(){
        System.out.println("i am a Dinosaur");
    }
}
