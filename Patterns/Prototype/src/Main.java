import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> firstList = new ArrayList<>(Arrays.asList("A", "B", "C"));

        Object clone = firstList.clone();

        ArrayList<String> cloneBackToArrayList = (ArrayList<String>) clone;
       
    }
}
