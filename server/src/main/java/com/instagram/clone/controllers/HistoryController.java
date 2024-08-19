package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.services.HistoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/history")
@RestController
public class HistoryController {

    private final HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @PostMapping("{userSearchedId}")
    public ResponseEntity<?> addHistory(@PathVariable Long userSearchedId, @RequestHeader (value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(historyService.addHistory(userSearchedId, token));
        } catch (AlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The user has already searched this user");
        }  catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @GetMapping
    public ResponseEntity<?> getHistory(@RequestHeader (value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(historyService.getHistory(token));
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteHistory(@PathVariable Long id, @RequestHeader(value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(historyService.deleteHistory(id, token));
        } catch (UserMismatchException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User mismatch: You do not have permission to delete this user of history");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User searched does not exist");
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: invalid token");
        }
    }
}
