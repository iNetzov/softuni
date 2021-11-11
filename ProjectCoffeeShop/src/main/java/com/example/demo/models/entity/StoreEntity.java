package com.example.demo.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "stores")
public class StoreEntity extends BaseEntity{
    private String address;

    public StoreEntity() {
    }

    @Column(name = "addresss",nullable = false)
    @NotNull
    @Size(min = 5,max = 50)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
