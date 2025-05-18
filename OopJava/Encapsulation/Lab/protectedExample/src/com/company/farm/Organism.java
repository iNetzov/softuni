package com.company.farm;

public class Organism {
    private int weight;

    public Organism(int weight) {
        this.weight = weight;
    }

    public int getWeight() {
        return weight;
    }

    protected void setWeight(int weight) {
        if (weight<0){
            throw new IllegalStateException("Cannot be under 0");
        }
        this.weight = weight;
    }

    public void updateState(){
    //if something happen must go to hibernate.
        hibernate();

    }

    protected void hibernate(){
        System.out.println("Hibernate");
    }
}
