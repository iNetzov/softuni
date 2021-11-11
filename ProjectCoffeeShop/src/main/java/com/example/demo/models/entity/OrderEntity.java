package com.example.demo.models.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "orders")
public class OrderEntity extends BaseEntity {
    private UserEntity customer;
    private List<ProductEntity> products;
    private StoreEntity store;

    public OrderEntity() {
    }

    @ManyToOne
    public UserEntity getCustomer() {
        return customer;
    }

    public void setCustomer(UserEntity customer) {
        this.customer = customer;
    }

    @OneToMany
    public List<ProductEntity> getProducts() {
        return products;
    }

    public void setProducts(List<ProductEntity> products) {
        this.products = products;
    }

    @ManyToOne
    public StoreEntity getStore() {
        return store;
    }

    public void setStore(StoreEntity store) {
        this.store = store;
    }
}
