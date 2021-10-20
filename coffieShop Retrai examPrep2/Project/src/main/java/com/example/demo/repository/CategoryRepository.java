package com.example.demo.repository;

import com.example.demo.model.entity.Category;
import com.example.demo.model.entity.enums.CategoryEnums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
Optional<Category> findByName(CategoryEnums name);
}
