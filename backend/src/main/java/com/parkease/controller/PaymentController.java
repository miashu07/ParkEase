// Update your existing PaymentController.java
package com.parkease.controller;

import com.parkease.dto.request.PaymentRequest;
import com.parkease.service.DemoPaymentService;
import com.parkease.service.PaymentService;
import com.parkease.service.ReservationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
@Slf4j
public class PaymentController {

    private final PaymentService paymentService;
    private final ReservationService reservationService;
    private final DemoPaymentService demoPaymentService;

    // Initiate a payment (existing with demo support)
    @PostMapping("/initiate")
    public ResponseEntity<?> initiatePayment(@RequestBody PaymentRequest request) {
        if (demoPaymentService.isDemoMode()) {
            log.info("DEMO MODE: Initiating demo payment for reservation: {}", request.reservationId());
            
            Map<String, Object> demoResponse = new HashMap<>();
            demoResponse.put("mode", "DEMO");
            demoResponse.put("reservationId", request.reservationId());
            demoResponse.put("amount", request.amount());
            demoResponse.put("message", "Demo payment initiated - use test card: 4111 1111 1111 1111");
            demoResponse.put("instructions", demoPaymentService.getDemoInstructions());
            
            return ResponseEntity.ok(demoResponse);
        }
        
        return ResponseEntity.ok(paymentService.initiatePayment(request));
    }

    // Demo payment to confirm reservation and return receipt
    @PostMapping("/demo")
    public ResponseEntity<?> demoPayment(@RequestBody PaymentRequest request) {
        log.info("Processing demo payment for reservation: {}", request.reservationId());
        
        String mode = request.paymentMode() != null ? request.paymentMode() : "ONLINE_DEMO";
        
        // Create demo payment record
        Map<String, Object> demoPayment = demoPaymentService.createDemoPaymentOrder(
            request.amount(), 
            "ParkEase Reservation #" + request.reservationId()
        );
        
        // Verify demo payment
        Map<String, Object> verification = demoPaymentService.verifyDemoPayment(
            (String) demoPayment.get("id"),
            "pay_demo_" + System.currentTimeMillis(),
            "demo_signature_" + request.reservationId()
        );
        
        boolean success = (boolean) verification.getOrDefault("success", true);
        
        if (success) {
            // Confirm reservation
            return ResponseEntity.ok(
                reservationService.confirmPayment(
                    request.reservationId(), 
                    request.amount(), 
                    mode + "_DEMO"
                )
            );
        } else {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Demo payment failed",
                "message", "Simulated payment failure for testing",
                "demo", true,
                "reservationId", request.reservationId()
            ));
        }
    }

    // Handle payment webhook (updated for demo)
    @PostMapping("/webhook")
    public ResponseEntity<?> webhook(@RequestBody String payload) {
        if (demoPaymentService.isDemoMode()) {
            log.info("DEMO MODE: Processing webhook");
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Demo webhook processed",
                "demo", true
            ));
        }
        
        paymentService.verifyWebhookSignature(payload);
        return ResponseEntity.ok("Webhook received");
    }

    // New endpoint for demo payment simulation
    @PostMapping("/simulate")
    public ResponseEntity<?> simulatePayment(@RequestBody Map<String, Object> simulation) {
        log.info("Payment simulation requested: {}", simulation);
        
        String scenario = (String) simulation.getOrDefault("scenario", "success");
        double amount = Double.parseDouble(simulation.getOrDefault("amount", "100.0").toString());
        
        Map<String, Object> response = new HashMap<>();
        response.put("simulation", true);
        response.put("scenario", scenario);
        response.put("amount", amount);
        response.put("timestamp", System.currentTimeMillis());
        
        switch (scenario.toLowerCase()) {
            case "success":
                response.put("status", "paid");
                response.put("message", "Payment simulation successful");
                response.put("transactionId", "txn_demo_success_" + System.currentTimeMillis());
                break;
            case "failure":
                response.put("status", "failed");
                response.put("message", "Payment simulation failed (insufficient funds)");
                response.put("errorCode", "card_declined");
                break;
            case "pending":
                response.put("status", "pending");
                response.put("message", "Payment simulation pending (awaiting authentication)");
                response.put("authenticationUrl", "https://demo.parkease.com/auth/3d-secure");
                break;
            default:
                response.put("status", "unknown");
                response.put("message", "Unknown simulation scenario");
        }
        
        return ResponseEntity.ok(response);
    }

    // Check payment status (with demo support)
    @GetMapping("/status/{reservationId}")
    public ResponseEntity<?> getPaymentStatus(@PathVariable Long reservationId) {
        if (demoPaymentService.isDemoMode()) {
            Map<String, Object> demoStatus = new HashMap<>();
            demoStatus.put("reservationId", reservationId);
            demoStatus.put("status", "paid");
            demoStatus.put("amount", 100.0);
            demoStatus.put("currency", "INR");
            demoStatus.put("paidAt", System.currentTimeMillis());
            demoStatus.put("demo", true);
            demoStatus.put("note", "Demo payment status - no real transaction");
            
            return ResponseEntity.ok(demoStatus);
        }
        
        // TODO: Implement real payment status check
        return ResponseEntity.ok(Map.of(
            "reservationId", reservationId,
            "status", "unavailable",
            "message", "Real payment status check not implemented"
        ));
    }
}