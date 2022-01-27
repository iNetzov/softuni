package p02_OpenClosedPrinciple.p02_DrawingShape;

import p02_OpenClosedPrinciple.p02_DrawingShape.interfaces.Draw;
import p02_OpenClosedPrinciple.p02_DrawingShape.interfaces.Shape;

public class Triangle implements Shape, Draw {

    @Override
    public void draw(){
        System.out.println("i am triangle");
    }

}
