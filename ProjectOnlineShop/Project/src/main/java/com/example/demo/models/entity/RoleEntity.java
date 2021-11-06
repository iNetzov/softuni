package com.example.demo.models.entity;

import com.example.demo.models.entity.BaseEntity.BaseEntity;
import com.example.demo.models.entity.enums.RoleEnum;
import org.springframework.context.annotation.Role;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "roles")
public class RoleEntity extends BaseEntity {
    private RoleEnum role;

    public RoleEntity() {
    }

    @Enumerated(EnumType.STRING)
    @Column(name = "role",nullable = false,unique = true)
    public RoleEnum getRole() {
        return role;
    }

    public void setRole(RoleEnum role) {
        this.role = role;
    }
}
