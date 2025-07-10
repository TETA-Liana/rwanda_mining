package com.example.registerinterest.service;

import com.example.registerinterest.model.RegisterInterest;
import com.example.registerinterest.repository.RegisterInterestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterInterestService {
    @Autowired
    private RegisterInterestRepository repository;

    public RegisterInterest save(RegisterInterest interest) {
        return repository.save(interest);
    }
} 