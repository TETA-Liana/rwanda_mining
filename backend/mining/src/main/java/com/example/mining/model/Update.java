package com.example.mining.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Update {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(length = 500)
    private String imagePath;

    @Column(length = 500)
    private String reportPath;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Update() {}

    public Update(Long id, String title, String description, String imagePath, String reportPath, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.reportPath = reportPath;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImagePath() { return imagePath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    public String getReportPath() { return reportPath; }
    public void setReportPath(String reportPath) { this.reportPath = reportPath; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    // Builder pattern for convenience
    public static Builder builder() { return new Builder(); }
    public static class Builder {
        private Long id;
        private String title;
        private String description;
        private String imagePath;
        private String reportPath;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        
        public Builder id(Long id) { this.id = id; return this; }
        public Builder title(String title) { this.title = title; return this; }
        public Builder description(String description) { this.description = description; return this; }
        public Builder imagePath(String imagePath) { this.imagePath = imagePath; return this; }
        public Builder reportPath(String reportPath) { this.reportPath = reportPath; return this; }
        public Builder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public Builder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }
        
        public Update build() {
            return new Update(id, title, description, imagePath, reportPath, createdAt, updatedAt);
        }
    }
} 