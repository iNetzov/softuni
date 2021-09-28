package bg.softuni.Test1.di;

import java.util.Date;

public class Untestable {

    private Date aDate;

    public Untestable() {
        aDate = new Date();
    }

    Date plus24H(){
        return  new Date(aDate.getTime()+24*60*60*1000);
    }
}
