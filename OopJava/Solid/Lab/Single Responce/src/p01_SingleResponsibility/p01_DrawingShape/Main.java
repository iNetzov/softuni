package p01_SingleResponsibility.p01_DrawingShape;

public class Main {
    public static void main(String[] args) {
        ShapeRepository shapeRepository = new ShapeRepository();

        DrawingManagerImpl drawingManager = new DrawingManagerImpl(shapeRepository, new RenderImpl());

        shapeRepository.addShape(new Rectangle(12,11));
        shapeRepository.addShape(new Rectangle(13,9));
        shapeRepository.addShape(new Circle());

        drawingManager.drawAll();
    }
}
