package com.example.Hateos.repository;

import com.example.Hateos.models.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentsRepository extends JpaRepository<StudentEntity,Long> {



}
