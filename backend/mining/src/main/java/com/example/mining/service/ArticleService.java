package com.example.mining.service;

import com.example.mining.model.Article;
import com.example.mining.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Optional<Article> getArticleById(Long id) {
        return articleRepository.findById(id);
    }

    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    public Optional<Article> updateArticle(Long id, Article articleDetails) {
        return articleRepository.findById(id)
                .map(existing -> {
                    existing.setTitle(articleDetails.getTitle());
                    existing.setDescription(articleDetails.getDescription());
                    existing.setReleaseDate(articleDetails.getReleaseDate());
                    if (articleDetails.getImagePath() != null) {
                        existing.setImagePath(articleDetails.getImagePath());
                    }
                    if (articleDetails.getLink() != null) {
                        existing.setLink(articleDetails.getLink());
                    }
                    return articleRepository.save(existing);
                });
    }

    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }
} 