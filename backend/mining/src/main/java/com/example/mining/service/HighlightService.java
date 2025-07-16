package com.example.mining.service;

import com.example.mining.model.Highlight;
import com.example.mining.repository.HighlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HighlightService {
    private final HighlightRepository highlightRepository;

    @Autowired
    public HighlightService(HighlightRepository highlightRepository) {
        this.highlightRepository = highlightRepository;
    }

    public List<Highlight> getAllHighlights() {
        return highlightRepository.findAll();
    }

    public Optional<Highlight> getHighlightById(Long id) {
        return highlightRepository.findById(id);
    }

    public Highlight createHighlight(Highlight highlight) {
        return highlightRepository.save(highlight);
    }

    public Optional<Highlight> updateHighlight(Long id, Highlight highlightDetails) {
        return highlightRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(highlightDetails.getTitle());
                    existing.setDescription(highlightDetails.getDescription());
                    if (highlightDetails.getMainImagePath() != null) {
                        existing.setMainImagePath(highlightDetails.getMainImagePath());
                    }
                    return highlightRepository.save(existing);
                });
    }

    public void deleteHighlight(Long id) {
        highlightRepository.deleteById(id);
    }
} 