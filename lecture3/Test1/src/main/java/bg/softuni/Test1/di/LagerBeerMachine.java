package bg.softuni.Test1.di;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
@Primary
public class LagerBeerMachine implements BeerMachineIfc{

    @Override
    public String makeBeer() {
        return "A glass of cold pale lager!";
    }
    @PostConstruct
    public void postConstruct(){
        System.out.println("Post Construct");;
    }
    @PreDestroy
    public  void destroy(){
        System.out.println("Pre destroy");
    }
}
