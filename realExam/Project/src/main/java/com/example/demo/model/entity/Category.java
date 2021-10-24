package com.example.demo.model.entity;

import com.example.demo.model.entity.enums.CategoryNameEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "categories")
public class Category  extends BaseEntity{
    private CategoryNameEnum name;
    private String description;

    public Category() {
    }

    @Enumerated(EnumType.STRING)
    @NotNull
    @Column(unique = true)
    public CategoryNameEnum getName() {
        return name;
    }

    public void setName(CategoryNameEnum name) {
        this.name = name;
    }

    @Column(name = "description",columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
