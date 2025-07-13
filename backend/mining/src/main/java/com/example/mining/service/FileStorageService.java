package com.example.mining.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageService {
    
    private final Path uploadDir = Paths.get("uploads");
    private final Path imagesDir = uploadDir.resolve("images");
    private final Path reportsDir = uploadDir.resolve("reports");
    
    public FileStorageService() {
        try {
            // Create directories if they don't exist
            Files.createDirectories(imagesDir);
            Files.createDirectories(reportsDir);
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload directories", e);
        }
    }
    
    public String storeImage(MultipartFile file) throws IOException {
        return storeFile(file, imagesDir, "image");
    }
    
    public String storeReport(MultipartFile file) throws IOException {
        return storeFile(file, reportsDir, "report");
    }
    
    private String storeFile(MultipartFile file, Path directory, String type) throws IOException {
        if (file.isEmpty()) {
            throw new IOException("Failed to store empty file");
        }
        
        // Generate unique filename
        String originalFilename = file.getOriginalFilename();
        String extension = "";
        if (originalFilename != null && originalFilename.contains(".")) {
            extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }
        String filename = UUID.randomUUID().toString() + extension;
        
        // Store the file
        Path targetPath = directory.resolve(filename);
        Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
        
        // Return the relative path for database storage
        return targetPath.toString();
    }
    
    public byte[] loadFile(String filePath) throws IOException {
        Path path = Paths.get(filePath);
        if (!Files.exists(path)) {
            throw new IOException("File not found: " + filePath);
        }
        return Files.readAllBytes(path);
    }
    
    public void deleteFile(String filePath) {
        try {
            Path path = Paths.get(filePath);
            if (Files.exists(path)) {
                Files.delete(path);
            }
        } catch (IOException e) {
            // Log error but don't throw - file might already be deleted
            System.err.println("Error deleting file: " + filePath + " - " + e.getMessage());
        }
    }
} 