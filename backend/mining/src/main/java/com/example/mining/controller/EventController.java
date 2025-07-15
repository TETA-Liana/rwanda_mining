package com.example.mining.controller;

import com.example.mining.model.Event;
import com.example.mining.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventService.getEventById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<?> createEvent(
            @RequestPart("event") Event event,
            @RequestPart(value = "image", required = false) MultipartFile image
    ) throws IOException {
        Event created = eventService.createEvent(event, image);
        return ResponseEntity.ok(created);
    }

    @PutMapping(value = "/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<?> updateEvent(
            @PathVariable Long id,
            @RequestPart("event") Event event,
            @RequestPart(value = "image", required = false) MultipartFile image
    ) throws IOException {
        Event updated = eventService.updateEvent(id, event, image);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/image/{filename:.+}")
    public ResponseEntity<ByteArrayResource> serveImage(@PathVariable String filename) {
        try {
            String filePath = "uploads/events/images/" + filename;
            java.nio.file.Path path = java.nio.file.Paths.get(filePath);
            byte[] data = java.nio.file.Files.readAllBytes(path);
            ByteArrayResource resource = new ByteArrayResource(data);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
                    .contentType(MediaType.IMAGE_JPEG)
                    .contentLength(data.length)
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
} 