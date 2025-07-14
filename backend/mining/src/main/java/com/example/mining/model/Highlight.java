package com.example.mining.model;

import jakarta.persistence.*;

@Entity
public class Highlight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(length = 500)
    private String mainImagePath;

    @Column(length = 2000)
    private String galleryImagePaths; // Comma-separated filenames

    public Highlight() {}

    public Highlight(Long id, String title, String description, String mainImagePath, String galleryImagePaths) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.mainImagePath = mainImagePath;
        this.galleryImagePaths = galleryImagePaths;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getMainImagePath() { return mainImagePath; }
    public void setMainImagePath(String mainImagePath) { this.mainImagePath = mainImagePath; }
    public String getGalleryImagePaths() { return galleryImagePaths; }
    public void setGalleryImagePaths(String galleryImagePaths) { this.galleryImagePaths = galleryImagePaths; }
} 