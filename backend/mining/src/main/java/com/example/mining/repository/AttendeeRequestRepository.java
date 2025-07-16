package com.example.mining.repository;

import com.example.mining.model.AttendeeRequest;
import org.springframework.data.jpa.repository.JpaRepository;
 
public interface AttendeeRequestRepository extends JpaRepository<AttendeeRequest, Long> {
} 