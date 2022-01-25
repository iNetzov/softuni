package math;

public class MathOperation {

//    OverLoading add Methods
//    Static / Compile time polymorphism
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return add(a, b) + c;
    }

    public int add(int a, int b, int c, int d) {
        return add(a, b, c) + d;
    }
//    OverLoading add Methods
//    Static / Compile time polymorphism

}
