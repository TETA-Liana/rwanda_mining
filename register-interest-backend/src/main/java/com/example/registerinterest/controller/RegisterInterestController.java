package com.example.registerinterest.controller;

import com.example.registerinterest.model.RegisterInterest;
import com.example.registerinterest.service.RegisterInterestService;
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