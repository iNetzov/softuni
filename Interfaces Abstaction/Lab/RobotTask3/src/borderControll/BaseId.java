package borderControll;

public abstract class BaseId implements Identifiable {
    private String id;

    protected BaseId(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return this.id;
    }
}
