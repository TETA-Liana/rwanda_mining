package com.example.mining.service;

import com.example.mining.model.Testimonial;
import com.example.mining.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestimonialService {
    private final TestimonialRepository testimonialRepository;

    @Autowired
    public TestimonialService(TestimonialRepository testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }

    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    public Optional<Testimonial> getTestimonialById(Long id) {
        return testimonialRepository.findById(id);
    }

    public Testimonial createTestimonial(Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    public Optional<Testimonial> updateTestimonial(Long id, Testimonial updated) {
        return testimonialRepository.findById(id).map(existing -> {
            existing.setName(updated.getName());
            existing.setRole(updated.getRole());
            existing.setCompany(updated.getCompany());
            existing.setMessage(updated.getMessage());
            return testimonialRepository.save(existing);
        });
    }

    public void deleteTestimonial(Long id) {
        testimonialRepository.deleteById(id);
    }
} 