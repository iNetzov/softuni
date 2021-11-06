package com.example.demo.models.entity;

import com.example.demo.models.entity.BaseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "stores")
public class StoreEntity extends BaseEntity {
    private String location;

    public StoreEntity() {
    }

    @Column(name = "location",nullable = false,unique = true)
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
