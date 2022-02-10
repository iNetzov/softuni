import java.util.HashMap;
import java.util.Map;

public class SingletonImpl implements Singleton {

    private static SingletonImpl instance;
    private Map<String, Integer> counter;


    private SingletonImpl() {
        try {
            System.out.println("simulate heavy work ");
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        this.counter = new HashMap<>();
    }


    public static Singleton getInstance() {
        if (instance == null){
            instance = new SingletonImpl();
            return  instance;
        }else{
            return instance;
        }
    }

    @Override
    public int getPopulation(Map<String, Integer> populations, String name) {
        return populations.get(name);
    }

    @Override
    public Map<String, Integer> getCounter() {
        return counter;
    }
}
