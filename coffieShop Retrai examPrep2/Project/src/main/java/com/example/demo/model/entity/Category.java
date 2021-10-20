package com.example.demo.model.entity;

import com.example.demo.model.entity.enums.CategoryEnums;
import org.springframework.stereotype.Controller;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "categories")
public class Category  extends BaseEntity{
    private CategoryEnums name;
    private Integer neededTime;

    public Category() {
    }

    @Enumerated(EnumType.STRING)
    public CategoryEnums getName() {
        return name;
    }

    public void setName(CategoryEnums name) {
        this.name = name;
    }

    @NotNull
    @Column(name ="needed_time")
    public Integer getNeededTime() {
        return neededTime;
    }

    public void setNeededTime(Integer neededTime) {
        this.neededTime = neededTime;
    }
}
