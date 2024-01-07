package com.instagram.clone.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.16:8081"})
@RequestMapping("/api/history")
@RestController
public class FollowingController {
}
