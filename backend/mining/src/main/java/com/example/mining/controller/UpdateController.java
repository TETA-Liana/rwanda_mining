package com.example.mining.controller;

import com.example.mining.model.Update;
import com.example.mining.service.UpdateService;
import com.example.mining.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/updates")
public class UpdateController {
    private final UpdateService updateService;
    private final FileStorageService fileStorageService;

    @Autowired
    public UpdateController(UpdateService updateService, FileStorageService fileStorageService) {
        this.updateService = updateService;
        this.fileStorageService = fileStorageService;
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

    // File upload endpoints
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

    @PostMapping("/upload-report")
    public ResponseEntity<String> uploadReport(@RequestParam("file") MultipartFile file) {
        try {
            String filePath = fileStorageService.storeReport(file);
            String filename = java.nio.file.Paths.get(filePath).getFileName().toString();
            return ResponseEntity.ok(filename);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Failed to upload report: " + e.getMessage());
        }
    }

    // File serving endpoints
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

    @GetMapping("/report/{filename:.+}")
    public ResponseEntity<ByteArrayResource> serveReport(@PathVariable String filename) {
        try {
            String filePath = "uploads/reports/" + filename;
            byte[] data = fileStorageService.loadFile(filePath);
            ByteArrayResource resource = new ByteArrayResource(data);
            
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .contentLength(data.length)
                    .body(resource);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Serve files by full path (for existing records)
    @GetMapping("/file")
    public ResponseEntity<ByteArrayResource> serveFile(@RequestParam String path) {
        try {
            byte[] data = fileStorageService.loadFile(path);
            ByteArrayResource resource = new ByteArrayResource(data);
            
            // Determine content type based on file extension
            String contentType = MediaType.APPLICATION_OCTET_STREAM_VALUE;
            if (path.toLowerCase().endsWith(".jpg") || path.toLowerCase().endsWith(".jpeg")) {
                contentType = MediaType.IMAGE_JPEG_VALUE;
            } else if (path.toLowerCase().endsWith(".png")) {
                contentType = MediaType.IMAGE_PNG_VALUE;
            } else if (path.toLowerCase().endsWith(".pdf")) {
                contentType = MediaType.APPLICATION_PDF_VALUE;
            }
            
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + path.substring(path.lastIndexOf("/") + 1) + "\"")
                    .contentType(MediaType.parseMediaType(contentType))
                    .contentLength(data.length)
                    .body(resource);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
} 