package com.example.mining.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Testimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String role;
    private String company;

    @Column(nullable = false, length = 2000)
    private String message;

    @Column(length = 500)
    private String youtubeLink;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Testimonial() {}

    public Testimonial(Long id, String name, String role, String company, String message, String youtubeLink, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.company = company;
        this.message = message;
        this.youtubeLink = youtubeLink;
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

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getYoutubeLink() { return youtubeLink; }
    public void setYoutubeLink(String youtubeLink) { this.youtubeLink = youtubeLink; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    // Builder pattern for convenience
    public static Builder builder() { return new Builder(); }
    public static class Builder {
        private Long id;
        private String name;
        private String role;
        private String company;
        private String message;
        private String youtubeLink;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        public Builder id(Long id) { this.id = id; return this; }
        public Builder name(String name) { this.name = name; return this; }
        public Builder role(String role) { this.role = role; return this; }
        public Builder company(String company) { this.company = company; return this; }
        public Builder message(String message) { this.message = message; return this; }
        public Builder youtubeLink(String youtubeLink) { this.youtubeLink = youtubeLink; return this; }
        public Builder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public Builder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }
        public Testimonial build() {
            return new Testimonial(id, name, role, company, message, youtubeLink, createdAt, updatedAt);
        }
    }
} 