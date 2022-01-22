public class Main {

    public static void main(String[] args) {

        Person person = new Person("name1");
        person.print();

//        level up abstraction lvl
        //interface = object that implements the interface

        Printable printable = new Person("ivailo");
        Printable printableCar = new Car();

        printable.print();
        printableCar.print();
        System.out.println(printableCar.getAsString());
        



    }
}
