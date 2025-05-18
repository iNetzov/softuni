public class Main {

    public static void main(String[] args) {
        //With  Collections.unmodifiableList(players); you encapsulate the list so you cant modify with the getter check TEAM
        Team team = new Team("Real");
        Person person = new Person("Misho");
        System.out.println(team.getPlayers().size());
        team.getPlayers().add(person);
        System.out.println(team.getPlayers().size());
    }
}
