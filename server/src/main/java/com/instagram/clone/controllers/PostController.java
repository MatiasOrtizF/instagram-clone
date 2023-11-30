package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Post;
import com.instagram.clone.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.9:8081"})
@RequestMapping("/api/post")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<?> getAllPosts(@RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(postService.getAllPosts(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.badRequest().body("Unauthorized: invalid token");
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getPost(@PathVariable Long id) {
        try {
            postService.getPost(id);
            return ResponseEntity.ok().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.badRequest().body("Post does not exist");
        }
    }

    @PostMapping
    public ResponseEntity<?> addPost(@RequestBody Post post, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(postService.addPost(post, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.badRequest().body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id, @RequestHeader(value = "Authorization")String token) {
        try {
            postService.deletePost(id, token);
            return ResponseEntity.ok().build();
        } catch (UnauthorizedException e) {
            return ResponseEntity.badRequest().body("Unauthorized: invalid token");
        }
    }

    @PatchMapping("{id}")
    public ResponseEntity<?> editPost(@PathVariable Long id, @RequestParam String newContent, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(postService.editPost(id, newContent, token));
        } catch (UserMismatchException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User mismatch: You do not have permission to edit this post");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}
