public class Car implements Printable{
    @Override
    public void print() {
        System.out.println("I am a car");
    }

    @Override
    public String getAsString() {
        return "car";
    }

    @Override
    public int compareTo(String o) {
        return 0;
    }
}
