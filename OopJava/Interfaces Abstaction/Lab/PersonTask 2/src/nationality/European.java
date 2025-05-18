package nationality;

public class European  extends BasePerson implements Person{


    public European(String name) {
        super(name);
    }

    @Override
    public String getName() {
        return this.getName();
    }

    @Override
    public String sayHello() {
        return "Hello";
    }
}
