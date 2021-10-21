package com.example.demo.model.binding;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.enums.CategoryNameEnum;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Enumerated;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

public class ProductAddBindingModel {
    private String name;
    private String description;
    private LocalDateTime before;
    private BigDecimal price;
    private CategoryNameEnum category;

    public ProductAddBindingModel() {
    }

    @Size(min = 3,max = 20)
    @NotNull
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Size(min = 5)
    @NotNull
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Future
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
    public LocalDateTime getBefore() {
        return before;
    }

    public void setBefore(LocalDateTime before) {
        this.before = before;
    }

    @Positive
    @NotNull
    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }


    public CategoryNameEnum getCategory() {
        return category;
    }

    public void setCategory(CategoryNameEnum category) {
        this.category = category;
    }
}
