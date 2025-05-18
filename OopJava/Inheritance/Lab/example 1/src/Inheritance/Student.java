package Inheritance;

public class Student extends Person{
    private String school;

    public Student(String name, String address, String school) {
        super(name, address);
        this.school = school;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }


}
