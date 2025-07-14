package com.example.mining.service;

import com.example.mining.model.Update;
import com.example.mining.repository.UpdateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UpdateService {
    private final UpdateRepository updateRepository;
    private final FileStorageService fileStorageService;

    @Autowired
    public UpdateService(UpdateRepository updateRepository, FileStorageService fileStorageService) {
        this.updateRepository = updateRepository;
        this.fileStorageService = fileStorageService;
    }

    public List<Update> getAllUpdates() {
        return updateRepository.findAll();
    }

    public Optional<Update> getUpdateById(Long id) {
        return updateRepository.findById(id);
    }

    public Update createUpdate(Update update) {
        return updateRepository.save(update);
    }

    public Optional<Update> updateUpdate(Long id, Update updateDetails) {
        return updateRepository.findById(id)
                .map(existingUpdate -> {
                    // Delete old files if they're being replaced
                    if (updateDetails.getImagePath() != null && !updateDetails.getImagePath().equals(existingUpdate.getImagePath())) {
                        if (existingUpdate.getImagePath() != null) {
                            fileStorageService.deleteFile(existingUpdate.getImagePath());
                        }
                    }
                    if (updateDetails.getReportPath() != null && !updateDetails.getReportPath().equals(existingUpdate.getReportPath())) {
                        if (existingUpdate.getReportPath() != null) {
                            fileStorageService.deleteFile(existingUpdate.getReportPath());
                        }
                    }
                    
                    existingUpdate.setTitle(updateDetails.getTitle());
                    existingUpdate.setDescription(updateDetails.getDescription());
                    if (updateDetails.getImagePath() != null) {
                        existingUpdate.setImagePath(updateDetails.getImagePath());
                    }
                    if (updateDetails.getReportPath() != null) {
                        existingUpdate.setReportPath(updateDetails.getReportPath());
                    }
                    return updateRepository.save(existingUpdate);
                });
    }

    public void deleteUpdate(Long id) {
        updateRepository.findById(id).ifPresent(update -> {
            // Delete associated files
            if (update.getImagePath() != null) {
                fileStorageService.deleteFile(update.getImagePath());
            }
            if (update.getReportPath() != null) {
                fileStorageService.deleteFile(update.getReportPath());
            }
            // Delete the database record
            updateRepository.deleteById(id);
        });
    }
} 