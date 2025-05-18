import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {

    public static class CommandBuilder {
        private String commandName;
        private Integer param;
        private Map<String,Command>commandsByNames;

        public CommandBuilder(String commandName, Integer param) {
            this.commandName = commandName;
            this.param = param;
            this.commandsByNames = new HashMap<>();
        }
        public Command build(){
            Command command = commandsByNames.get(this.commandName);
            if (param!= null){
                command.setCommandValue(this.param);
            }
            return command;
        }



    }

    public static boolean gameOver = false;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        while (!gameOver) {
            String commandLine = scanner.nextLine();
            processInput(commandLine);
        }

    }

    private static void processInput(String line) {
        String[] tokens = line.split(" ");
        Integer param = tokens.length == 2 ?Integer.parseInt(tokens[1]):null;
        Command build = new CommandBuilder(tokens[0], param).build();
        System.out.println(build.execute());

    }
}
