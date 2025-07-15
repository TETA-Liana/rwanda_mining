package com.example.mining.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SponsorRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sponsorName;
    private String sponsorCompany;
    private String sponsorBudget;
    private String sponsorEmail;
    private String sponsorPhoneCode;
    private String sponsorPhone;
    private String sponsorNotes;
    private String event;
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
} 