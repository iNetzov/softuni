import Inheritance.Employee;
import Inheritance.Person;
import Inheritance.Student;

public class Main {

    public static void main(String[] args) {
        Person person = new Person("ivailo","123");

        person.setAddress("Address Here");
        person.setName("Ivailo Netzov");

        Employee employee = new Employee("ivailo","1234","1233");

        employee.setSalary("1555");
        employee.setName("Vesselin Netzov");
        employee.setAddress("Deff not the Address");
        System.out.println();


    }
}
