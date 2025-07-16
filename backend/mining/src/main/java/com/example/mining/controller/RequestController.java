package com.example.mining.controller;

import com.example.mining.model.SponsorRequest;
import com.example.mining.model.ExhibitorRequest;
import com.example.mining.model.AttendeeRequest;
import com.example.mining.service.SponsorRequestService;
import com.example.mining.service.ExhibitorRequestService;
import com.example.mining.service.AttendeeRequestService;
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
    @Autowired
    private AttendeeRequestService attendeeRequestService;

    @PostMapping("/sponsor")
    public SponsorRequest createSponsor(@RequestBody SponsorRequest req) {
        return sponsorRequestService.save(req);
    }

    @PostMapping("/exhibitor")
    public ExhibitorRequest createExhibitor(@RequestBody ExhibitorRequest req) {
        return exhibitorRequestService.save(req);
    }

    @PostMapping("/attendee")
    public AttendeeRequest createAttendee(@RequestBody AttendeeRequest req) {
        return attendeeRequestService.save(req);
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
                // Ensure status is always present and always uppercase
                String status = s.getStatus() != null ? s.getStatus().toUpperCase() : "PENDING";
                s.setStatus(status); // update in-memory for response
                map.put("status", status);
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
                // Ensure status is always present and always uppercase
                String status = e.getStatus() != null ? e.getStatus().toUpperCase() : "PENDING";
                e.setStatus(status); // update in-memory for response
                map.put("status", status);
                map.put("raw", e);
                result.add(map);
            }
        }
        if (type.equals("attendee") || type.equals("all")) {
            for (AttendeeRequest a : attendeeRequestService.getAll(search)) {
                Map<String, Object> map = new LinkedHashMap<>();
                map.put("type", "attendee");
                map.put("id", a.getId());
                map.put("name", a.getFirstName() + " " + a.getLastName());
                map.put("company", a.getCompanyName());
                map.put("event", a.getEvent());
                map.put("email", a.getEmail());
                map.put("createdAt", a.getCreatedAt());
                String status = a.getStatus() != null ? a.getStatus().toUpperCase() : "PENDING";
                a.setStatus(status);
                map.put("status", status);
                map.put("raw", a);
                result.add(map);
            }
        }
        // Sort by createdAt descending
        result.sort((a, b) -> {
            Object oba = a.get("createdAt");
            Object obb = b.get("createdAt");
            if (oba == null && obb == null) return 0;
            if (oba == null) return 1;
            if (obb == null) return -1;
            // Both should be LocalDateTime
            java.time.LocalDateTime da = (java.time.LocalDateTime) oba;
            java.time.LocalDateTime db = (java.time.LocalDateTime) obb;
            return db.compareTo(da);
        });
        return result;
    }

    @PostMapping("/sponsor/{id}/grant")
    public SponsorRequest grantSponsor(@PathVariable Long id) {
        return sponsorRequestService.grantRequest(id);
    }
    @PostMapping("/sponsor/{id}/deny")
    public SponsorRequest denySponsor(@PathVariable Long id) {
        return sponsorRequestService.denyRequest(id);
    }
    @PostMapping("/exhibitor/{id}/grant")
    public ExhibitorRequest grantExhibitor(@PathVariable Long id) {
        return exhibitorRequestService.grantRequest(id);
    }
    @PostMapping("/exhibitor/{id}/deny")
    public ExhibitorRequest denyExhibitor(@PathVariable Long id) {
        return exhibitorRequestService.denyRequest(id);
    }
    @PostMapping("/attendee/{id}/grant")
    public AttendeeRequest grantAttendee(@PathVariable Long id) {
        return attendeeRequestService.grantRequest(id);
    }
    @PostMapping("/attendee/{id}/deny")
    public AttendeeRequest denyAttendee(@PathVariable Long id) {
        return attendeeRequestService.denyRequest(id);
    }
    @GetMapping("/sponsors/granted")
    public List<SponsorRequest> getGrantedSponsors() {
        return sponsorRequestService.getGrantedSponsors();
    }
    @GetMapping("/exhibitors/granted")
    public List<ExhibitorRequest> getGrantedExhibitors() {
        return exhibitorRequestService.getGrantedExhibitors();
    }
    @GetMapping("/attendees/granted")
    public List<AttendeeRequest> getGrantedAttendees() {
        return attendeeRequestService.getGrantedAttendees();
    }
} 