package com.example.mining.repository;

import com.example.mining.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
 
public interface ArticleRepository extends JpaRepository<Article, Long> {
} 