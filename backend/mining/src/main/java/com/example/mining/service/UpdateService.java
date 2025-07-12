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

    @Autowired
    public UpdateService(UpdateRepository updateRepository) {
        this.updateRepository = updateRepository;
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
        updateRepository.deleteById(id);
    }
} 