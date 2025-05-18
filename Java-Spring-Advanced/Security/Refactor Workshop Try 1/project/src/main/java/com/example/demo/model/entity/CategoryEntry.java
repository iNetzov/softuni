package com.example.demo.model.entity;

import com.example.demo.model.entity.enums.CategoryNameEnum;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class CategoryEntry extends BaseEntity {
    private CategoryNameEnum name;
    private String description;

    public CategoryEntry() {
    }

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    public CategoryNameEnum getName() {
        return name;
    }

    public void setName(CategoryNameEnum name) {
        this.name = name;
    }

    @Column(columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
