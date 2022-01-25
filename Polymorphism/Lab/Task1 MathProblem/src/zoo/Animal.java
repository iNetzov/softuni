package zoo;

import java.io.IOException;

public interface Animal extends Organism{
    void eat();
    void makeSound() throws IOException;
}
