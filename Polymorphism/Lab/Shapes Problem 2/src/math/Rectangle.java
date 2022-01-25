package math;

public class Rectangle extends Shape {
    private Double height;
    private Double width;

    public Rectangle(Double height, Double width) {
        this.height = height;
        this.width = width;
    }

    @Override
    public Double calculatePerimeter() {
        setPerimeter(height + height + width + width);
        return height + height + width + width;
    }

    @Override
    public Double calculateArea() {
        setArea(height * width);
        return height * width;
    }
}
