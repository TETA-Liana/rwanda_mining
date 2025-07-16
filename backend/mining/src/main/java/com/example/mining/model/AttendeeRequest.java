package com.example.mining.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendeeRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String country;
    private String email;
    private String phoneCode;
    private String phoneNumber;
    private String companyName;
    private String jobTitle;
    private String jobFunction;
    private String event;
    private LocalDateTime createdAt;
    private String status = "PENDING"; // PENDING, GRANTED, DENIED
    private LocalDateTime grantedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
} 