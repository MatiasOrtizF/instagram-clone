package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.User;
import com.instagram.clone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchByUser(@RequestParam String word, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(userService.searchByUser(word, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

}
