package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.services.FollowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/follower")
@RestController
public class FollowerController {

    private final FollowerService followerService;

    @Autowired
    public FollowerController (FollowerService followerService) {
        this.followerService = followerService;
    }

    @GetMapping("{userId}")
    public ResponseEntity<?> getAllFollowers(@PathVariable Long userId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(followerService.getAllFollowers(userId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @PostMapping("{followingUserId}")
    public ResponseEntity<?> addFollower(@PathVariable Long followingUserId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(followerService.addFollow(followingUserId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user has already follow this user");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("{followingUserId}")
    public ResponseEntity<?> deleteFollow(@PathVariable Long followingUserId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(followerService.deleteFollow(followingUserId, token));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping
    public ResponseEntity<?> getFollowerUser(@RequestParam Long userId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(followerService.getFollowerUser(userId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}