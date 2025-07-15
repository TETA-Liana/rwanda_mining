package com.example.mining.service;

import com.example.mining.model.SponsorRequest;
import com.example.mining.repository.SponsorRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SponsorRequestService {
    @Autowired
    private SponsorRequestRepository sponsorRequestRepository;

    public SponsorRequest save(SponsorRequest request) {
        return sponsorRequestRepository.save(request);
    }

    public List<SponsorRequest> getAll(String search) {
        List<SponsorRequest> all = sponsorRequestRepository.findAll();
        if (search == null || search.isEmpty()) return all;
        String s = search.toLowerCase();
        return all.stream().filter(r ->
            (r.getSponsorName() != null && r.getSponsorName().toLowerCase().contains(s)) ||
            (r.getSponsorCompany() != null && r.getSponsorCompany().toLowerCase().contains(s)) ||
            (r.getEvent() != null && r.getEvent().toLowerCase().contains(s))
        ).collect(Collectors.toList());
    }

    public SponsorRequest getById(Long id) {
        return sponsorRequestRepository.findById(id).orElse(null);
    }
} 