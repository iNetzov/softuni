package p01_SingleResponsibility.p01_DrawingShape;

import p01_SingleResponsibility.p01_DrawingShape.interfaces.Shape;

public class Circle implements Shape {


    @Override
    public void draw() {
        System.out.println("i am circle");
    }
}
