package com.example.demo.repository;

import com.example.demo.model.entity.CategoryEntry;
import com.example.demo.model.entity.enums.CategoryNameEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntry,Long> {

    Optional<CategoryEntry>findByName(CategoryNameEnum categoryNameEnum);
}
