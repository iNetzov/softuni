package bg.softuni.Test1.di;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;


public class BartenderClass {

    private BeerMachineIfc beerMachine;

    public BartenderClass(@Qualifier("aleMachine") BeerMachineIfc beerMachine) {
        this.beerMachine = beerMachine;
    }
  public String serveBeer(){
        return beerMachine.makeBeer();
    }

}
