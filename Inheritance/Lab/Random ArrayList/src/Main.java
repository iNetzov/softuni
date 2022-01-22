

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {


        RandomArrayList<String> arrayList = new RandomArrayList<>();
        arrayList.add("1");
        arrayList.add("2");
        arrayList.add("3");
        System.out.println(arrayList.getRandomElement());

        System.out.println();
        System.out.println();

        for (String s : arrayList) {
            System.out.println(s);
        }
        System.out.println();
        System.out.println();

        ArrayList<String> arrays = new ArrayList<>();
        ArrayList<String> arrays1 = new ArrayList<>();
        arrays.add("0");
        arrays.add("1");
        arrays.add("2");
        arrays.add("3");

    }
}
