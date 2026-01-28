package com.parkease.controller;

import com.parkease.dto.request.PaymentRequest;
import com.parkease.service.DemoPaymentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payment/demo-controller")
@RequiredArgsConstructor
@Slf4j
public class DemoPaymentController {

    private final DemoPaymentService demoPaymentService;

    /**
     * Create demo payment order
     */
    @PostMapping("/create-order")
    public ResponseEntity<?> createDemoOrder(@RequestBody Map<String, Object> request) {
        try {
            double amount = Double.parseDouble(request.get("amount").toString());
            String description = (String) request.getOrDefault("description", "ParkEase Booking");

            Map<String, Object> order = demoPaymentService.createDemoPaymentOrder(amount, description);
            return ResponseEntity.ok(order);
        } catch (Exception e) {
            log.error("Error creating demo order", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to create demo order",
                    "message", e.getMessage()));
        }
    }

    /**
     * Verify demo payment
     */
    @PostMapping("/verify")
    public ResponseEntity<?> verifyDemoPayment(@RequestBody Map<String, Object> request) {
        try {
            String orderId = (String) request.get("orderId");
            String paymentId = (String) request.get("paymentId");
            String signature = (String) request.get("signature");

            Map<String, Object> verification = demoPaymentService.verifyDemoPayment(orderId, paymentId, signature);
            return ResponseEntity.ok(verification);
        } catch (Exception e) {
            log.error("Error verifying demo payment", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Payment verification failed",
                    "message", e.getMessage()));
        }
    }

    /**
     * Generate demo receipt
     */
    @GetMapping("/receipt/{paymentId}")
    public ResponseEntity<?> getDemoReceipt(@PathVariable String paymentId,
            @RequestParam(defaultValue = "100.0") double amount) {
        try {
            Map<String, Object> receipt = demoPaymentService.generateDemoReceipt(paymentId, amount);
            return ResponseEntity.ok(receipt);
        } catch (Exception e) {
            log.error("Error generating demo receipt", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to generate receipt",
                    "message", e.getMessage()));
        }
    }

    /**
     * Get payment status
     */
    @GetMapping("/status/{paymentId}")
    public ResponseEntity<?> getDemoPaymentStatus(@PathVariable String paymentId) {
        try {
            Map<String, Object> status = demoPaymentService.getPaymentStatus(paymentId);
            return ResponseEntity.ok(status);
        } catch (Exception e) {
            log.error("Error getting demo payment status", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to get payment status",
                    "message", e.getMessage()));
        }
    }

    /**
     * Get demo payment instructions
     */
    @GetMapping("/instructions")
    public ResponseEntity<?> getDemoInstructions() {
        try {
            Map<String, Object> instructions = demoPaymentService.getDemoInstructions();
            return ResponseEntity.ok(instructions);
        } catch (Exception e) {
            log.error("Error getting demo instructions", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Failed to get instructions",
                    "message", e.getMessage()));
        }
    }

    /**
     * Simulate payment webhook (for testing)
     */
    @PostMapping("/webhook/simulate")
    public ResponseEntity<?> simulateWebhook(@RequestBody Map<String, Object> payload) {
        try {
            log.info("Received demo webhook payload: {}", payload);

            // Process webhook based on event type
            String event = (String) payload.getOrDefault("event", "payment.captured");
            String paymentId = (String) payload.getOrDefault("paymentId", "pay_demo_" + System.currentTimeMillis());

            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Webhook received and processed");
            response.put("event", event);
            response.put("paymentId", paymentId);
            response.put("timestamp", System.currentTimeMillis());
            response.put("demo", true);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Error processing demo webhook", e);
            return ResponseEntity.badRequest().body(Map.of(
                    "error", "Webhook processing failed",
                    "message", e.getMessage()));
        }
    }

    /**
     * Check if demo mode is enabled
     */
    @GetMapping("/mode")
    public ResponseEntity<?> getPaymentMode() {
        return ResponseEntity.ok(Map.of(
                "demoMode", demoPaymentService.isDemoMode(),
                "message",
                demoPaymentService.isDemoMode() ? "Application is in DEMO mode. No real payments are processed."
                        : "Application is in PRODUCTION mode.",
                "timestamp", System.currentTimeMillis()));
    }
}