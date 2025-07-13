package com.example.mining.service;

import com.example.mining.model.Admin;
import com.example.mining.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Optional<Admin> authenticate(String emailOrUsername, String password) {
        Optional<Admin> adminOpt = adminRepository.findByEmail(emailOrUsername);
        if (adminOpt.isEmpty()) {
            adminOpt = adminRepository.findByUsername(emailOrUsername);
        }
        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();
            if (passwordEncoder.matches(password, admin.getPassword())) {
                return Optional.of(admin);
            }
        }
        return Optional.empty();
    }

    public Admin findByUsernameOrEmail(String usernameOrEmail) {
        Admin admin = adminRepository.findByEmail(usernameOrEmail).orElse(null);
        if (admin == null) {
            admin = adminRepository.findByUsername(usernameOrEmail).orElse(null);
        }
        return admin;
    }

    public String encodePassword(String rawPassword) {
        return passwordEncoder.encode(rawPassword);
    }

    public Admin save(Admin admin) {
        return adminRepository.save(admin);
    }
} 