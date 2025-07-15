package com.example.mining.controller;

import com.example.mining.model.SponsorRequest;
import com.example.mining.model.ExhibitorRequest;
import com.example.mining.service.SponsorRequestService;
import com.example.mining.service.ExhibitorRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "*")
public class RequestController {
    @Autowired
    private SponsorRequestService sponsorRequestService;
    @Autowired
    private ExhibitorRequestService exhibitorRequestService;

    @PostMapping("/sponsor")
    public SponsorRequest createSponsor(@RequestBody SponsorRequest req) {
        return sponsorRequestService.save(req);
    }

    @PostMapping("/exhibitor")
    public ExhibitorRequest createExhibitor(@RequestBody ExhibitorRequest req) {
        return exhibitorRequestService.save(req);
    }

    @GetMapping
    public List<Map<String, Object>> getAllRequests(
            @RequestParam(defaultValue = "all") String type,
            @RequestParam(required = false) String search
    ) {
        List<Map<String, Object>> result = new ArrayList<>();
        if (type.equals("sponsor") || type.equals("all")) {
            for (SponsorRequest s : sponsorRequestService.getAll(search)) {
                Map<String, Object> map = new LinkedHashMap<>();
                map.put("type", "sponsor");
                map.put("id", s.getId());
                map.put("name", s.getSponsorName());
                map.put("company", s.getSponsorCompany());
                map.put("event", s.getEvent());
                map.put("email", s.getSponsorEmail());
                map.put("phone", s.getSponsorPhone());
                map.put("createdAt", s.getCreatedAt());
                map.put("raw", s);
                result.add(map);
            }
        }
        if (type.equals("exhibitor") || type.equals("all")) {
            for (ExhibitorRequest e : exhibitorRequestService.getAll(search)) {
                Map<String, Object> map = new LinkedHashMap<>();
                map.put("type", "exhibitor");
                map.put("id", e.getId());
                map.put("name", e.getFirstName() + " " + e.getLastName());
                map.put("company", e.getCompanyName());
                map.put("event", e.getEvent());
                map.put("email", e.getEmail());
                map.put("phone", e.getPhoneNumber());
                map.put("createdAt", e.getCreatedAt());
                map.put("raw", e);
                result.add(map);
            }
        }
        // Sort by createdAt descending
        result.sort((a, b) -> {
            Date da = (Date) a.get("createdAt");
            Date db = (Date) b.get("createdAt");
            return db.compareTo(da);
        });
        return result;
    }
} 