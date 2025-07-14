package com.example.mining.service;

import com.example.mining.model.RegisterInterest;
import com.example.mining.repository.RegisterInterestRepository;
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