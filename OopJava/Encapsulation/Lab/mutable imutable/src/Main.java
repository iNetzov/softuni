import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //immutable objects String
        String strTest1 = "aaa";
        String str = "aaa";
        System.out.println(System.identityHashCode(strTest1));
        System.out.println(strTest1.hashCode());
        System.out.println();
        System.out.println(str.hashCode());
        System.out.println();
        strTest1+="a";
        System.out.println(System.identityHashCode(strTest1));
        System.out.println(strTest1.hashCode());

        //immutable objects String

    }
}
