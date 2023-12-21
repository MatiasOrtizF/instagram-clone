package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.repositories.LikeRepository;
import com.instagram.clone.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.4:8081"})
@RequestMapping("/api/like")
public class LikeController {
    private final LikeService likeService;
    private final LikeRepository likeRepository;

    @Autowired
    public LikeController(LikeService likeService,
                          LikeRepository likeRepository) {
        this.likeService = likeService;
        this.likeRepository = likeRepository;
    }

    @PostMapping
    public ResponseEntity<?> likePost(@RequestParam Long postId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(likeService.likePost(token, postId));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user has already liked this post");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllLikes(@RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(likeService.getAllLikes(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<?> likedPost(@PathVariable Long id, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok().body(likeService.likedPost(id, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}
