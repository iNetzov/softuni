package Person;

public class Patient  extends Person{
    protected float weigh;

    public Patient(int weigh,float weigh1) {
        super(weigh);
        this.weigh = weigh1;
    }


    public void method(double weigh){
        System.out.println("method scope weight :"+weigh);
        System.out.println("class scope weight :"+ this.weigh);
        System.out.println("parent class scope weight :"+super.weigh);
    }
}
