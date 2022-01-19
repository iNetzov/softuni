package person;

public class Student  extends Person{
    public Student(String name) {
        super(name);
    }

    @Override
    public void sleep() {

        System.out.println("Student is sleeping");
    }
}
