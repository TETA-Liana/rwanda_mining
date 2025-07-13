package com.example.mining.controller;

import com.example.mining.model.Admin;
import com.example.mining.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/profile")
    public ResponseEntity<Admin> getProfile(Authentication authentication) {
        String username = authentication.getName();
        Admin admin = adminService.findByUsernameOrEmail(username);
        if (admin == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(admin);
    }

    @PutMapping("/profile")
    public ResponseEntity<Admin> updateProfile(Authentication authentication, @RequestBody Admin updated) {
        String username = authentication.getName();
        Admin admin = adminService.findByUsernameOrEmail(username);
        if (admin == null) {
            return ResponseEntity.notFound().build();
        }
        admin.setName(updated.getName());
        admin.setEmail(updated.getEmail());
        if (updated.getPassword() != null && !updated.getPassword().isEmpty()) {
            admin.setPassword(adminService.encodePassword(updated.getPassword()));
        }
        Admin saved = adminService.save(admin);
        return ResponseEntity.ok(saved);
    }
} 