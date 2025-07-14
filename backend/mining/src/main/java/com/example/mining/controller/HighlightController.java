package com.example.mining.controller;

import com.example.mining.model.Highlight;
import com.example.mining.service.HighlightService;
import com.example.mining.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/highlights")
@CrossOrigin(origins = "http://localhost:5173")
public class HighlightController {
    private final HighlightService highlightService;
    private final FileStorageService fileStorageService;

    @Autowired
    public HighlightController(HighlightService highlightService, FileStorageService fileStorageService) {
        this.highlightService = highlightService;
        this.fileStorageService = fileStorageService;
    }

    @GetMapping
    public List<Highlight> getAllHighlights() {
        return highlightService.getAllHighlights();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Highlight> getHighlightById(@PathVariable Long id) {
        Optional<Highlight> highlight = highlightService.getHighlightById(id);
        return highlight.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Highlight> createHighlight(@RequestBody Highlight highlight) {
        Highlight created = highlightService.createHighlight(highlight);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Highlight> updateHighlight(@PathVariable Long id, @RequestBody Highlight highlight) {
        return highlightService.updateHighlight(id, highlight)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHighlight(@PathVariable Long id) {
        highlightService.deleteHighlight(id);
        return ResponseEntity.noContent().build();
    }

    // Main image upload endpoint
    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            String filePath = fileStorageService.storeImage(file);
            String filename = java.nio.file.Paths.get(filePath).getFileName().toString();
            return ResponseEntity.ok(filename);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Failed to upload image: " + e.getMessage());
        }
    }

    // Gallery images upload endpoint
    @PostMapping("/upload-gallery")
    public ResponseEntity<List<String>> uploadGallery(@RequestParam("files") MultipartFile[] files) {
        List<String> filenames = new ArrayList<>();
        for (MultipartFile file : files) {
            try {
                String filePath = fileStorageService.storeImage(file);
                String filename = java.nio.file.Paths.get(filePath).getFileName().toString();
                filenames.add(filename);
            } catch (IOException e) {
                // Optionally handle error for individual files
            }
        }
        return ResponseEntity.ok(filenames);
    }

    // Image serving endpoint
    @GetMapping("/image/{filename:.+}")
    public ResponseEntity<ByteArrayResource> serveImage(@PathVariable String filename) {
        try {
            String filePath = "uploads/images/" + filename;
            byte[] data = fileStorageService.loadFile(filePath);
            ByteArrayResource resource = new ByteArrayResource(data);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
                    .contentType(MediaType.IMAGE_JPEG)
                    .contentLength(data.length)
                    .body(resource);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
} 