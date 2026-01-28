package com.parkease.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkease.dto.request.ReservationRequest;
import com.parkease.security.CustomUserDetails;
import com.parkease.service.ParkingSlotService;
import com.parkease.service.ReservationService;
import com.parkease.service.ParkingZoneService;
import com.parkease.service.PricingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

        private final ReservationService reservationService;
        private final ParkingSlotService parkingSlotService;
        private final ParkingZoneService parkingZoneService;
        private final PricingService pricingService;

        // -------------------------------
        // GET AVAILABLE SLOTS
        // -------------------------------
        @GetMapping("/slots")
        public ResponseEntity<?> getAvailableSlots(@RequestParam Integer zoneId) {
                return ResponseEntity.ok(parkingSlotService.getAvailableSlots(zoneId));
        }
        // -------------------------------
        // LIST PARKING ZONES
        // -------------------------------
        @GetMapping("/zones")
        public ResponseEntity<?> getZones(@RequestParam(required = false) String location) {
                return ResponseEntity.ok(parkingZoneService.getAllParkingZonesList(location));
        }
        // -------------------------------
        // GET ZONE BY ID
        // -------------------------------
        @GetMapping("/zones/{id}")
        public ResponseEntity<?> getZoneById(@PathVariable int id) {
                return ResponseEntity.ok(parkingZoneService.getParkingZoneById(id));
        }
        // -------------------------------
        // GET SLOTS BY ZONE NAME
        // -------------------------------
        @GetMapping("/zones/{name}/slots")
        public ResponseEntity<?> getSlotsByZoneName(@PathVariable String name) {
                var zone = parkingZoneService.getByName(name);
                return ResponseEntity.ok(parkingSlotService.getAvailableSlots(zone.getId()));
        }
        // -------------------------------
        // CREATE RESERVATION
        // -------------------------------
        @PostMapping("/reserve")
        public ResponseEntity<?> reserveSlot(
                        @RequestBody ReservationRequest request,
                        @AuthenticationPrincipal CustomUserDetails userDetails) {

                var user = userDetails.getUser();

                var reservation = reservationService.createReservation(
                                request.getSlotId(),
                                request.getStartTime(),
                                request.getEndTime(),
                                request.getVehicleType(),
                                request.getVehicleNumber(),
                                user);

                return ResponseEntity.ok(reservation);
        }

        // -------------------------------
        // CANCEL RESERVATION
        // -------------------------------
        @DeleteMapping("/cancel/{id}")
        public ResponseEntity<?> cancel(
                        @PathVariable Integer id,
                        @AuthenticationPrincipal CustomUserDetails user) {

                return ResponseEntity.ok(
                                reservationService.cancelReservation(
                                                id,
                                                user.getUser().getId()));
        }

        // -------------------------------
        // OLD HISTORY API (KEEP IT WORKING)
        // -------------------------------
        @GetMapping("/history")
        public ResponseEntity<?> getHistory(
                        @AuthenticationPrincipal CustomUserDetails user) {

                return ResponseEntity.ok(
                                reservationService.getReservationsByUser(
                                                user.getUser().getId()));
        }

        // -------------------------------
        // 🔥 NEW API FOR FRONTEND
        // -------------------------------
        @GetMapping("/reservations")
        public ResponseEntity<?> getMyReservations(
                        @AuthenticationPrincipal CustomUserDetails userDetails) {

                return ResponseEntity.ok(
                                reservationService.getReservationsByUser(
                                                userDetails.getUser().getId()));
        }

        // -------------------------------
        // CALCULATE PRICE
        // -------------------------------
        @GetMapping("/price")
        public ResponseEntity<?> calculatePrice(
                        @RequestParam String vehicleType,
                        @RequestParam int hours) {

                var type = com.parkease.enums.VehicleType.valueOf(vehicleType);
                double amount = pricingService.calculatePriceByHours(type, hours);

                return ResponseEntity.ok(amount);
        }
}
