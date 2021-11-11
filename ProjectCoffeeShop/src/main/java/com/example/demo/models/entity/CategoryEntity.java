package com.example.demo.models.entity;

import com.example.demo.models.entity.enums.CategoryEntityNameEnum;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "categories")
public class CategoryEntity extends BaseEntity {

    private CategoryEntityNameEnum category;

    public CategoryEntity() {
    }

    @Enumerated(EnumType.STRING)
    public CategoryEntityNameEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryEntityNameEnum category) {
        this.category = category;
    }
}
