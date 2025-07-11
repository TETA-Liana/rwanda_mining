package com.example.mining.controller;

import com.example.mining.model.Admin;
import com.example.mining.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String emailOrUsername = payload.get("emailOrUsername");
        String password = payload.get("password");
        return adminService.authenticate(emailOrUsername, password)
                .map(admin -> ResponseEntity.ok(Map.of(
                        "id", admin.getId(),
                        "email", admin.getEmail(),
                        "username", admin.getUsername()
                )))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials")));
    }
} 