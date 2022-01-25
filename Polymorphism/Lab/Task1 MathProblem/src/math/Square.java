package math;

public class Square extends Rectangle {


    public Square(double a) {
        super(a);
    }

    @Override
    public double area() {
        return getA() * getA();
    }
}
