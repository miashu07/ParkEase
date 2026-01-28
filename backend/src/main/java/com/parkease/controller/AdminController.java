package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.service.AdminAnalyticsService;
import com.parkease.service.ParkingSlotService;
import com.parkease.service.ParkingZoneService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final ParkingZoneService parkingZoneService;
    private final ParkingSlotService parkingSlotService;
    private final AdminAnalyticsService adminAnalyticsService;

    // Create a new parking zone
    @PostMapping("/zone")
    public ResponseEntity<?> createZone(@RequestBody ParkingZoneDto dto) {
        return ResponseEntity.ok(parkingZoneService.createParkingZone(dto));
    }

    // Get all parking zones (ADMIN)
    @GetMapping("/zones")
    public ResponseEntity<?> getAllZones() {
        return ResponseEntity.ok(parkingZoneService.getAllParkingZonesList(null));
    }

    // Get admin reports
    @GetMapping("/reports")
    public ResponseEntity<?> getReports() {
        return ResponseEntity.ok(adminAnalyticsService.getReports());
    }

    // 🔥 UPDATE ZONE
    @PutMapping("/zones/{id}")
    public ResponseEntity<?> updateZone(@PathVariable int id,
            @RequestBody ParkingZoneDto dto) {
        return ResponseEntity.ok(parkingZoneService.updateParkingZone(id, dto));
    }

    // 🔥 DELETE ZONE
    @DeleteMapping("/zones/{id}")
    public ResponseEntity<?> deleteZone(@PathVariable int id) {
        parkingZoneService.deleteParkingZone(id);
        return ResponseEntity.ok("Zone deleted successfully");
    }
}
