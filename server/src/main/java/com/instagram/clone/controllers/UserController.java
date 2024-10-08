package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.User;
import com.instagram.clone.models.UserRequest;
import com.instagram.clone.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.9:8081"})
@RequestMapping("/api/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User addUser(@RequestBody UserRequest userRequest) {
        return userService.addUser(userRequest);
    }

    @GetMapping
    public ResponseEntity<?> getUserInfo(@RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(userService.getUserInfo(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> getUserByUserName(@RequestParam String word, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(userService.getUserByUserName(word, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(userService.getUser(id, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User does not exist");
        }
    }

    @PutMapping
    public ResponseEntity<?> editUser(@RequestParam(name = "file", required = false) @RequestBody User user, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(userService.editPlayer(user, token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User does not exist");
        }
    }


}
