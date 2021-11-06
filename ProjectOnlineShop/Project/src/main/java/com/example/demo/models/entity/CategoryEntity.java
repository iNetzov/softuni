package com.example.demo.models.entity;

import com.example.demo.models.entity.BaseEntity.BaseEntity;
import com.example.demo.models.entity.enums.CategoriesNameEnum;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class CategoryEntity extends BaseEntity {
    private CategoriesNameEnum name;
    private String description;

    public CategoryEntity() {
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "name",nullable = false)
    public CategoriesNameEnum getName() {
        return name;
    }

    public void setName(CategoriesNameEnum name) {
        this.name = name;
    }
    @Column(name = "description",nullable = false)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
