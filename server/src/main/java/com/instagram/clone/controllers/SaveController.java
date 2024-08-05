package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.services.SaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/save")
public class SaveController {

    private final SaveService saveService;

    @Autowired
    public SaveController(SaveService saveService) {
        this.saveService = saveService;
    }


    @PostMapping("{postId}")
    public ResponseEntity<?> savePost(@PathVariable Long postId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(saveService.savePost(token, postId));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user has already saved this post");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllSave(@RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(saveService.getAllSave(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping("{postId}")
    public ResponseEntity<?> savedPost(@PathVariable Long postId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok().body(saveService.savedPost(postId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("{postId}")
    public ResponseEntity<?> unSavePost(@PathVariable Long postId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok().body(saveService.unSavePost(postId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Save or user does not exist");
        }
    }
}
