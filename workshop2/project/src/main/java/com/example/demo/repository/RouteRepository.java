package com.example.demo.repository;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.RouteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<RouteEntity,Long> {

}
