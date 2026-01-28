package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.repository.ParkingZoneRepository;
import com.parkease.service.ParkingSlotService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/slots")
@RequiredArgsConstructor
public class ParkingSlotController {

    private final ParkingSlotService slotService;
    private final ParkingZoneRepository zoneRepository;

    // ADD SLOT TO ZONE
    @PostMapping("/{zoneId}")
    public ResponseEntity<?> createSlot(@PathVariable Integer zoneId) {
        return ResponseEntity.ok(slotService.createSlot(zoneId));
    }

    // GET ALL SLOTS OF ZONE
    @GetMapping("/{zoneId}")
    public ResponseEntity<?> getSlots(@PathVariable Integer zoneId) {
        return ResponseEntity.ok(slotService.getSlotsByZone(zoneId));
    }

    // UPDATE SLOT STATUS
    @PutMapping("/{slotId}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Integer slotId,
                                          @RequestParam String status) {
        return ResponseEntity.ok(slotService.updateSlotStatus(slotId, status));
    }
}
