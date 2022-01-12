package com.company.farm;

public class Goat extends Organism {

    public Goat(int weight) {
        super(weight);
    }
    public void setWeight(int weight){
        this.setWeight(weight);
    }

    public void hasToGoToSleep(){
        super.hibernate();
    }
}
