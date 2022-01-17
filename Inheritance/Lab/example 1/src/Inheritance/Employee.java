package Inheritance;

public class Employee extends Person {
    private String salary;

    public Employee(String name, String address, String salary) {
        super(name, address);
        this.salary = salary;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}
