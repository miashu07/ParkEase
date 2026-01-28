package com.parkease.controller;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthController {
 
 private final DataSource dataSource;
 private final JdbcTemplate jdbcTemplate;
 
 @Autowired
 public HealthController(DataSource dataSource, JdbcTemplate jdbcTemplate) {
     this.dataSource = dataSource;
     this.jdbcTemplate = jdbcTemplate;
 }
 
 @GetMapping
 public ResponseEntity<Map<String, Object>> healthCheck() {
     Map<String, Object> health = new HashMap<>();
     health.put("status", "UP");
     health.put("timestamp", Instant.now());
     
     // Database health
     try {
         jdbcTemplate.execute("SELECT 1");
         health.put("database", "UP");
     } catch (Exception e) {
         health.put("database", "DOWN");
     }
     
     return ResponseEntity.ok(health);
 }
 
 @GetMapping("/metrics")
 public ResponseEntity<Map<String, Object>> metrics() {
     Map<String, Object> metrics = new HashMap<>();
     metrics.put("heapUsed", Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory());
     metrics.put("heapMax", Runtime.getRuntime().maxMemory());
     metrics.put("threadCount", Thread.activeCount());
     return ResponseEntity.ok(metrics);
 }
}