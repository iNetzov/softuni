package com.example.demo.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.awt.print.Book;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "authors")
public class AuthorEntity extends BaseEntity {

    private String name;

    private List<BookEntity> books = new LinkedList<>();

    public AuthorEntity() {
    }

    @Column
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(mappedBy = "author")
    public List<BookEntity> getBooks() {
        return books;
    }

    public void setBooks(List<BookEntity> books) {
        this.books = books;
    }
}
