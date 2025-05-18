package com.example.demo.model.entity;

import com.example.demo.model.entity.enums.LevelEnum;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "routes")
public class RouteEntity extends BaseEntity {
    private String gpxCoordinate;
    private LevelEnum level;
    private String name;
    private UserEntity author;
    private String videoUrl;
    private String description;
    private Set<CategoryEntry> categories;
    private Set<PictureEntity> pictures;
    public RouteEntity() {
    }

    @Column(name = "gpx_coordinates",columnDefinition = "LONGTEXT")
    public String getGpxCoordinate() {
        return gpxCoordinate;
    }

    public void setGpxCoordinate(String gpxCoordinate) {
        this.gpxCoordinate = gpxCoordinate;
    }

    @Enumerated(EnumType.STRING)
    public LevelEnum getLevel() {
        return level;
    }

    public void setLevel(LevelEnum level) {
        this.level = level;
    }

    @Column(unique = true,nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    public UserEntity getAuthor() {
        return author;
    }

    public void setAuthor(UserEntity author) {
        this.author = author;
    }

    @Column
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    @Column(columnDefinition = "TEXT")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToMany(fetch = FetchType.EAGER)
    public Set<CategoryEntry> getCategories() {
        return categories;
    }

    public void setCategories(Set<CategoryEntry> categories) {
        this.categories = categories;
    }

    @OneToMany(mappedBy = "route",fetch = FetchType.EAGER)
    public Set<PictureEntity> getPictures() {
        return pictures;
    }

    public void setPictures(Set<PictureEntity> pictures) {
        this.pictures = pictures;
    }
}
