import car.Audi;
import car.Car;
import car.Seat;

public class Main {

    public static void main(String[] args) {
        Car seat = new Seat("Leon","gray",110,"Spain",11111.1);
        printCarInfo(seat);
        System.out.println();
        Car audi = new Audi("A4","gray",112,"Bulgaria",3,99.9);
        printCarInfo(audi);


    }
    private static void printCarInfo(Car car){
        mainCarInfo(car);
        System.out.println(car.toString());
    }
    private static void mainCarInfo(Car car){
        System.out.printf("%s is %s color and have %d horse power%n", car.getModel(), car.getColor(), car.getHorsePower());

    }
}
