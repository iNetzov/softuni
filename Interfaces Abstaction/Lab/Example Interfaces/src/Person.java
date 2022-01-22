public class Person  implements  Printable, Comparable<String>{

    private String name; 

    public Person(String name) {
        this.name = name;
    }


    @Override
    public void print() {
        System.out.printf("hi %s%n",name);
    }

    @Override
    public String getAsString() {
        return name;
    }

    @Override
    public int compareTo(String o) {
        return 0;
    }
}
