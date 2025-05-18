package p01_SingleResponsibility.p01_DrawingShape;

import p01_SingleResponsibility.p01_DrawingShape.interfaces.DrawingRepository;
import p01_SingleResponsibility.p01_DrawingShape.interfaces.Renderer;
import p01_SingleResponsibility.p01_DrawingShape.interfaces.Shape;

public class RenderImpl implements Renderer {


    @Override
    public void render(DrawingRepository drawingRepository, Shape shape) {
        shape.draw();
    }
}
