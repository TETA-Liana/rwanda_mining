package com.example.mining.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminLoginController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String emailOrUsername = body.get("emailOrUsername");
        String password = body.get("password");
        // Hardcoded admin
        if (("admin@example.com".equalsIgnoreCase(emailOrUsername) || "admin".equalsIgnoreCase(emailOrUsername))
                && "Admin@123".equals(password)) {
            return ResponseEntity.ok(Map.of(
                "token", "dummy-token",
                "email", "admin@example.com"
            ));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials"));
    }
} 