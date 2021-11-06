package com.example.demo.models.entity;

import com.example.demo.models.entity.BaseEntity.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "discounts")
public class DiscountEntity extends BaseEntity {
    private String code;
    private BigDecimal percent;

    public DiscountEntity() {
    }

    @Column(name = "code",unique = true,nullable = false)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Column(name = "percent",nullable = false)
    public BigDecimal getPercent() {
        return percent;
    }

    public void setPercent(BigDecimal percent) {
        this.percent = percent;
    }
}
