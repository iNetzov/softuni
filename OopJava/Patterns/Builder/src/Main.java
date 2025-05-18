public class Main {

    public static void main(String[] args) {

        Address address = new Address();

        //Builder pattern;
        address
                .setName("ivailo")
                .setArea("AREA 51")
                .setCountry("Bulgaria")
                .setCity("Sofia");
        //NOT A Builder pattern

//              address.setName("ivailo")
//               address.setArea("AREA 51")
//                address.setCountry("Bulgaria")
//                address.setCity("Sofia");

        //
        CarBuilder builder = new CarBuilder();

        Car astra = builder.setEngine("2.4").setModel("Astra").setYear("2000").build();
    }
}
