package com.example.demo.models.entity;

import com.example.demo.models.entity.enums.RoleEntityNameEnum;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class RoleEntity extends BaseEntity {
    private RoleEntityNameEnum role;

    public RoleEntity() {
    }

    @Enumerated(EnumType.STRING)
    public RoleEntityNameEnum getRole() {
        return role;
    }

    public void setRole(RoleEntityNameEnum role) {
        this.role = role;
    }
}
