package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/comment")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController (CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("{postId}")
    public ResponseEntity<?> commentPost(@PathVariable Long postId, @RequestParam String comment, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.commentPost(postId, token, comment));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping("{postId}")
    public ResponseEntity<?> getAllComments(@PathVariable Long postId, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.getAllComments(postId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllMyComments(@RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.getAllMyComments(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable Long commentId, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.deleteComment(commentId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comment does not exist");
        } catch (UserMismatchException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User mismatch: You do not have permission to delete this comment");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    // like comment
    @PostMapping("like/{commentId}")
    public ResponseEntity<?> likeCommentPost(@PathVariable Long commentId, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.likeCommentPost(commentId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comment does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("like/{commentId}")
    public ResponseEntity<?> deleteLikeCommentPost(@PathVariable Long commentId, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(commentService.deleteLikeCommentPost(commentId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Comment does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}
