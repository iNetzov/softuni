package p02_OpenClosedPrinciple.p02_DrawingShape;


import p02_OpenClosedPrinciple.p02_DrawingShape.interfaces.Draw;
import p02_OpenClosedPrinciple.p02_DrawingShape.interfaces.Shape;

public class Rectangle implements Shape, Draw {

    @Override
    public void draw() {
        System.out.println("I am rectangle");
    }
}
