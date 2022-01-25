package math;

public class Circle extends Shape {

    private Double radius;

    public Circle(Double radius) {
        this.radius = radius;
    }

    @Override
    public Double calculatePerimeter() {
        setPerimeter(2 * Math.PI * radius);
        return 2 * Math.PI * radius;
    }

    @Override
    public Double calculateArea() {
        setArea(Math.PI * (radius * radius));
        return Math.PI * (radius * radius);
    }
}
