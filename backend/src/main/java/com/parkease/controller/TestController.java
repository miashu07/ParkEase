package com.parkease.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:5173") // Direct annotation
public class TestController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("service", "ParkEase Backend");
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/echo")
    public ResponseEntity<Map<String, Object>> echo(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new HashMap<>(request);
        response.put("received", true);
        response.put("timestamp", java.time.LocalDateTime.now().toString());
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/cors-test")
    public ResponseEntity<Map<String, String>> corsTest() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "CORS is working!");
        response.put("frontend", "http://localhost:5173");
        response.put("backend", "http://localhost:8080");
        return ResponseEntity.ok(response);
    }
}