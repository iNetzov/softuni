import person.Person;
import person.Student;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
                new Person("gosho"),
                new Student("mishto"));

        for (Person person : people) {
            person.sleep();
        }

        people.forEach(Person::sleep);

    }
}
