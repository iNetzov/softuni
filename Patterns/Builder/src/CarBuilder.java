public class CarBuilder {
    private String model;
    private String engine;
    private String year;


    public CarBuilder() {
    }

    public CarBuilder setModel(String model) {
        this.model = model;
        return this;
    }

    public CarBuilder setEngine(String engine) {
        this.engine = engine;
        return this;
    }

    public CarBuilder setYear(String year) {
        this.year = year;
        return this;
    }

    public Car build(){
        return new Car(engine,model,year);
    }
}
