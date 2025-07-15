package com.example.mining.service;

import com.example.mining.model.Event;
import com.example.mining.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    private final String uploadDir = "uploads/events/images/";

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public Event createEvent(Event event, MultipartFile image) throws IOException {
        if (event.getDate() == null || !event.getDate().isAfter(LocalDate.now())) {
            throw new IllegalArgumentException("Event date must be in the future");
        }
        if (image != null && !image.isEmpty()) {
            event.setImagePath(saveFile(image));
        }
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event event, MultipartFile image) throws IOException {
        Event existing = eventRepository.findById(id).orElseThrow();
        if (event.getDate() == null || !event.getDate().isAfter(LocalDate.now())) {
            throw new IllegalArgumentException("Event date must be in the future");
        }
        existing.setTitle(event.getTitle());
        existing.setDate(event.getDate());
        existing.setTime(event.getTime());
        existing.setTimezone(event.getTimezone());
        existing.setVenue(event.getVenue());
        if (image != null && !image.isEmpty()) {
            existing.setImagePath(saveFile(image));
        }
        return eventRepository.save(existing);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    private String saveFile(MultipartFile file) throws IOException {
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();
        String filename = java.util.UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path path = Paths.get(uploadDir + filename);
        Files.write(path, file.getBytes());
        return filename;
    }
} 