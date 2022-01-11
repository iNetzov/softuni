package com.company;

public class Rectangle {
    private Point2D bottomLeft;
    private Point2D topRight;

    public Rectangle(Point2D bottomLeft, Point2D topRight) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }


    public boolean contains(Point2D newPoint) {
        return newPoint.getPointX() >= bottomLeft.getPointX()
                && newPoint.getPointX() <= topRight.getPointX()
                && newPoint.getPointY() >= bottomLeft.getPointY()
                && newPoint.getPointY() <= topRight.getPointY();

    }
}
