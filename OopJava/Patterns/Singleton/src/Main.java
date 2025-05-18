public class Main {

    public static void main(String[] args) {
        Singleton singleton = SingletonImpl.getInstance();
        singleton.getCounter().put("Sofia",50);
        int sofia = singleton.getPopulation(singleton.getCounter(), "Sofia");
        singleton.getCounter().put("Plovdiv",55);
        int plovdiv = singleton.getPopulation(singleton.getCounter(), "Plovdiv");
        System.out.println(sofia);
        System.out.println(plovdiv);

    }
}
