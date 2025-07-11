package com.example.mining.controller;

import com.example.mining.model.RegisterInterest;
import com.example.mining.service.RegisterInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register-interest")
@CrossOrigin(origins = "*") // Allow all origins for development
public class RegisterInterestController {

    @Autowired
    private RegisterInterestService service;

    @PostMapping
    public RegisterInterest register(@RequestBody RegisterInterest interest) {
        return service.save(interest);
    }
} 