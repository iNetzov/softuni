import borderControll.Citizen;
import borderControll.Identifiable;
import borderControll.Robot;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        List<Identifiable> list = new ArrayList<>();
        while (!input.equals("End")) {
            String[] stringArray = input.split(" ");
            Identifiable current;
            if (stringArray.length == 3) {
                String name = stringArray[0];
                int age = Integer.parseInt(stringArray[1]);
                String id = stringArray[2];
                current = new Citizen(id, age, name);
            } else {
                String model = stringArray[0];
                String id = stringArray[1];
                current = new Robot(id, model);
            }
            list.add(current);
            input = scanner.nextLine();
        }
        String fakeId = scanner.nextLine();
        List<Identifiable> fakeOnesList = new ArrayList<>();

        list.forEach(target -> {
            if (target.getId().endsWith(fakeId)) {
                fakeOnesList.add(target);
            }
        });

        fakeOnesList.forEach(target -> System.out.println(target.getId()));

    }

}
