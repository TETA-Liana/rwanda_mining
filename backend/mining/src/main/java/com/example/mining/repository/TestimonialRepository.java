package com.example.mining.repository;

import com.example.mining.model.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
} 