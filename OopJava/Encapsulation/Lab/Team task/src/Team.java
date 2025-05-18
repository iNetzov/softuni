import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Team {
    private String name;
    private List<Person> players;

    public Team(String name) {
        this.name = name;
        this.players = new ArrayList<>();
    }


    public List<Person> getPlayers() {
        return Collections.unmodifiableList(players);
    }

    @Override
    public String toString() {
        return "Team{" +
                "name='" + name + '\'' +
                ", players=" + players +
                '}';
    }
}
