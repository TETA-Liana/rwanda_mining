package com.example.mining.repository;

import com.example.mining.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
 
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByEmail(String email);
    Optional<Admin> findByUsername(String username);
} 