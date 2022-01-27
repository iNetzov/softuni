package p01_SingleResponsibility.p01_DrawingShape;

import p01_SingleResponsibility.p01_DrawingShape.interfaces.DrawingRepository;
import p01_SingleResponsibility.p01_DrawingShape.interfaces.Shape;

import java.util.ArrayList;
import java.util.List;

public class ShapeRepository implements DrawingRepository {
   private List<Shape>shapeList = new ArrayList<>();


    @Override
    public void addShape(Shape shape) {
       this.shapeList.add(shape);
    }

    @Override
    public void drawAll() {
        for (Shape shape : shapeList) {
            shape.draw();
        }
    }
}
