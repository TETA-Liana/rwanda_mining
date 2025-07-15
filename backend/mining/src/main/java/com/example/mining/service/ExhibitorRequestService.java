package com.example.mining.service;

import com.example.mining.model.ExhibitorRequest;
import com.example.mining.repository.ExhibitorRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExhibitorRequestService {
    @Autowired
    private ExhibitorRequestRepository exhibitorRequestRepository;

    public ExhibitorRequest save(ExhibitorRequest request) {
        return exhibitorRequestRepository.save(request);
    }

    public List<ExhibitorRequest> getAll(String search) {
        List<ExhibitorRequest> all = exhibitorRequestRepository.findAll();
        if (search == null || search.isEmpty()) return all;
        String s = search.toLowerCase();
        return all.stream().filter(r ->
            (r.getFirstName() != null && r.getFirstName().toLowerCase().contains(s)) ||
            (r.getLastName() != null && r.getLastName().toLowerCase().contains(s)) ||
            (r.getCompanyName() != null && r.getCompanyName().toLowerCase().contains(s)) ||
            (r.getEvent() != null && r.getEvent().toLowerCase().contains(s))
        ).collect(Collectors.toList());
    }

    public ExhibitorRequest getById(Long id) {
        return exhibitorRequestRepository.findById(id).orElse(null);
    }
} 