package bg.softuni.Test1.di;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class AleBeerMachine  implements BeerMachineIfc {
    @Override
    public String makeBeer() {
        return "Ale Beer";
    }
}

