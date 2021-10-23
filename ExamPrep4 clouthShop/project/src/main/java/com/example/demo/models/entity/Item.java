package com.example.demo.models.entity;

import com.example.demo.models.entity.enums.GenderEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity
@Table(name = "items")
public class Item  extends  BaseEntity{
    private String name;
    private String description;
    private BigDecimal price;
    private Category category;
    private GenderEnum gender;

    public Item() {
    }

    @Column(name = "name",nullable = false,unique = true)
    @Size(min = 2)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description",columnDefinition = "TEXT")
    @Size(min = 3)
    @NotNull
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Positive
    @NotNull
    @Column(name = "price",nullable = false)
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    @ManyToOne
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Enumerated(EnumType.STRING)
    @NotNull
    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }
}
