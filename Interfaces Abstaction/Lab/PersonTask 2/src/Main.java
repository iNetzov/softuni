import nationality.Bulgarian;
import nationality.Chinese;
import nationality.European;
import nationality.Person;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<Person> personList = new ArrayList<>();

        personList.add(new European("euro"));
        personList.add(new Bulgarian("bulgar"));
        personList.add(new Chinese("china"));

        personList.forEach(p-> System.out.println(p.sayHello()));
    }
}
