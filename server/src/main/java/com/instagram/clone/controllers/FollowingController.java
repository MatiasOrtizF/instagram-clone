package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.services.FollowingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/following")
@RestController
public class FollowingController {

    private final FollowingService followingService;

    @Autowired
    public FollowingController (FollowingService followingService) {
        this.followingService = followingService;
    }

    @GetMapping("{userId}")
    public ResponseEntity<?> getAllFollowing(@PathVariable Long userId, @RequestHeader(value = "Authorization")String token) {
        try {
            return ResponseEntity.ok(followingService.getAllFollowing(userId, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}
