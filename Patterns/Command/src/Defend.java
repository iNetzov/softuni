public class Defend implements Command{
    @Override
    public String execute() {
        return "Defend activated";
    }

    @Override
    public void setCommandValue(Integer value) {
        throw new UnsupportedOperationException();
    }
}
