package math;

public class Rectangle {
    private double a;
    private double b;


    public Rectangle(double a, double b) {
        this.a = a;
        this.b = b;
    }

    protected Rectangle(double a) {
        this.a = a;
    }

    protected double getA() {
        return a;
    }

    public double area(){
        return this.a * this.b;
   }
}
