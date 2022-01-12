import com.company.farm.Goat;
import com.company.farm.Organism;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Organism organism = new Organism(130);
//        System.out.println(organism.getWeight());
        Goat goat = new Goat(17000);
        goat.setWeight(14);
//        System.out.println(goat.getWeight());
        goat.hasToGoToSleep();
        organism.updateState();

    }
}
