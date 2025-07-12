package com.example.mining.controller;

import com.example.mining.model.Update;
import com.example.mining.service.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/updates")
public class UpdateController {
    private final UpdateService updateService;

    @Autowired
    public UpdateController(UpdateService updateService) {
        this.updateService = updateService;
    }

    @GetMapping
    public List<Update> getAllUpdates() {
        return updateService.getAllUpdates();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Update> getUpdateById(@PathVariable Long id) {
        Optional<Update> update = updateService.getUpdateById(id);
        return update.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Update> createUpdate(@RequestBody Update update) {
        Update created = updateService.createUpdate(update);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Update> updateUpdate(@PathVariable Long id, @RequestBody Update update) {
        return updateService.updateUpdate(id, update)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUpdate(@PathVariable Long id) {
        updateService.deleteUpdate(id);
        return ResponseEntity.noContent().build();
    }
} 