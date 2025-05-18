package nationality;

public abstract class BasePerson implements Person{
    protected String name;

    protected BasePerson(String name) {
        setName(name);
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public String sayHello() {
        return null;
    }

    private void setName(String name) {
        this.name = name;
    }
}
