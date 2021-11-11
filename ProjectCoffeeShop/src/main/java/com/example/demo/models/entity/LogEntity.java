package com.example.demo.models.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import java.time.LocalDateTime;

@Entity
@Table(name = "logs")
public class LogEntity extends BaseEntity {
    private UserEntity client;
    private OrderEntity order;
    private LocalDateTime done;


    public LogEntity() {
    }

    @ManyToOne
    public UserEntity getClient() {
        return client;
    }

    public void setClient(UserEntity client) {
        this.client = client;
    }

    @ManyToOne
    public OrderEntity getOrder() {
        return order;
    }

    public void setOrder(OrderEntity order) {
        this.order = order;
    }

    @PastOrPresent
    @NotNull
    public LocalDateTime getDone() {
        return done;
    }

    public void setDone(LocalDateTime done) {
        this.done = done;
    }
}
