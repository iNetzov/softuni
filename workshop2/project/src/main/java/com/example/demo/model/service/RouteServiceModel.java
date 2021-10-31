package com.example.demo.model.service;

import com.example.demo.model.entity.CategoryEntry;
import com.example.demo.model.entity.PictureEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.model.entity.enums.CategoryNameEnum;
import com.example.demo.model.entity.enums.LevelEnum;

import java.util.Set;

public class RouteServiceModel {
    private Long id;
    private String gpxCoordinate;
    private LevelEnum level;
    private String name;
    private UserEntity author;
    private String videoUrl;
    private String description;
    private Set<CategoryNameEnum> categories;
    private Set<PictureEntity> pictures;

    public RouteServiceModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGpxCoordinate() {
        return gpxCoordinate;
    }

    public void setGpxCoordinate(String gpxCoordinate) {
        this.gpxCoordinate = gpxCoordinate;
    }

    public LevelEnum getLevel() {
        return level;
    }

    public void setLevel(LevelEnum level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UserEntity getAuthor() {
        return author;
    }

    public void setAuthor(UserEntity author) {
        this.author = author;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<CategoryNameEnum> getCategories() {
        return categories;
    }

    public void setCategories(Set<CategoryNameEnum> categories) {
        this.categories = categories;
    }

    public Set<PictureEntity> getPictures() {
        return pictures;
    }

    public void setPictures(Set<PictureEntity> pictures) {
        this.pictures = pictures;
    }
}
