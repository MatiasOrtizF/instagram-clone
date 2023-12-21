package com.instagram.clone.controllers;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.services.HistoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.4:8081"})
@RequestMapping("/api/history")
@RestController
public class HistoryController {

    private final HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @PostMapping("{userId}")
    public ResponseEntity<?> addHistory(@PathVariable Long userId, @RequestHeader (value = "Authorization") String token) {
        try {
            return ResponseEntity.ok(historyService.addHistory(userId, token));
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
}
