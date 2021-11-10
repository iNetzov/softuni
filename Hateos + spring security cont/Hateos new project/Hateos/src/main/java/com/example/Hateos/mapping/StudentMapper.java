package com.example.Hateos.mapping;

import com.example.Hateos.models.dto.StudentDTO;
import com.example.Hateos.models.entity.StudentEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StudentMapper {

    StudentDTO mapEntityToDTO(StudentEntity studentEntity);

}
