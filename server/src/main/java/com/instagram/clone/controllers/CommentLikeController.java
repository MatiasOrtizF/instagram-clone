package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.services.CommentLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/comment-like")
public class CommentLikeController {
    private final CommentLikeService commentLikeService;

    @Autowired
    public CommentLikeController(CommentLikeService commentLikeService) {
        this.commentLikeService = commentLikeService;
    }

    @PostMapping("{commentId}")
    public ResponseEntity<?> likeComment(@PathVariable Long commentId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(commentLikeService.likeComment(token, commentId));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user has already liked this post");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comment does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @GetMapping("{commentId}")
    public ResponseEntity<?> likedComment(@PathVariable Long commentId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok().body(commentLikeService.likedComment(commentId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @DeleteMapping("{commentId}")
    public ResponseEntity<?> deleteLikeComment(@PathVariable Long commentId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok().body(commentLikeService.deleteLikeComment(commentId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comment does not exist");
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user hasn't liked this post yet");
        }
    }
}
