package com.example.mining.controller;

import com.example.mining.model.Article;
import com.example.mining.service.ArticleService;
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
@RequestMapping("/api/articles")
@CrossOrigin(origins = "http://localhost:5173") // Adjust as needed
public class ArticleController {
    private final ArticleService articleService;
    private final FileStorageService fileStorageService;

    @Autowired
    public ArticleController(ArticleService articleService, FileStorageService fileStorageService) {
        this.articleService = articleService;
        this.fileStorageService = fileStorageService;
    }

    @GetMapping
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) {
        Optional<Article> article = articleService.getArticleById(id);
        return article.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        Article created = articleService.createArticle(article);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable Long id, @RequestBody Article article) {
        return articleService.updateArticle(id, article)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return ResponseEntity.noContent().build();
    }

    // Image upload endpoint
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

    // Image serving endpoint
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
} 