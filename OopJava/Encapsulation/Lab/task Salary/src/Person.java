public class Person {
    private String firstName;
    private String lastName;
    private int age;
    private double salary;

    public Person(String firstName, String lastName, int age) {
        setFirstName(firstName);
       setLastName(lastName);
        setAge(age);
    }

    public Person(String firstName, String lastName, int age, double salary) {
        this(firstName,lastName,age);
        setSalary(salary);
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public double getSalary() {
        return salary;
    }

    private void setSalary(double salary) {
        if (salary < 460.0){
//            System.out.println("salary cannot be less then 460");
            throw new IllegalArgumentException("salary cannot be less then 460");
        }
        this.salary = salary;
    }


    private void setFirstName(String firstName) {
        if (firstName.length() >= 3){
            this.firstName = firstName;
        }else{
//            System.out.println(" first name cannot be less then 3 symbols");
            throw new IllegalArgumentException(" first name cannot be less then 3 symbols");
        }
    }

    private void setLastName(String lastName) {

        if (lastName.length() >= 3){
            this.lastName = lastName;
        }else{
//            System.out.println("last name cannot be less then 3 symbols");
            throw new IllegalArgumentException("last name cannot be less then 3 symbols");
        }
    }

    private void setAge(int age) {
        if (age <= 0){
//            System.out.println("cannot be less then 0 age");
            throw new IllegalArgumentException("cannot be less then 0 age");
        }
        this.age = age;
    }

    public void  increaseSalary(double bonus){
        if (this.getAge()<30){
            this.setSalary(this.getSalary() + (this.getSalary()*bonus/200));
        }else{
            this.setSalary(this.getSalary() + (this.getSalary()*bonus/100));
        }

    }

    @Override
    public String toString() {
        return String.format("%s %s gets %.2f leva",getFirstName(), getLastName() ,getSalary());
    }
}
