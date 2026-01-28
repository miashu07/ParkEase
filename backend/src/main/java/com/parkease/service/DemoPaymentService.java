package com.parkease.service;


import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
public class DemoPaymentService {

    @Value("${payment.demo-mode:true}")
    private boolean demoMode;

    @Value("${payment.demo.success-rate:100}")
    private int successRate;

    @Value("${payment.demo.delay-milliseconds:2000}")
    private int delayMilliseconds;

    @Value("${payment.currency:INR}")
    private String currency;

    /**
     * Create a demo payment order
     */
    public Map<String, Object> createDemoPaymentOrder(double amount, String description) {
        log.info("Creating demo payment order for amount: {} {}", amount, currency);

        // Simulate API call delay
        simulateProcessingDelay();

        String orderId = "demo_order_" + UUID.randomUUID().toString().substring(0, 8);
        String razorpayOrderId = "order_" + UUID.randomUUID().toString().substring(0, 14);

        Map<String, Object> response = new HashMap<>();
        response.put("id", orderId);
        response.put("razorpayOrderId", razorpayOrderId);
        response.put("amount", amount);
        response.put("currency", currency);
        response.put("description", description);
        response.put("status", "created");
        response.put("createdAt", LocalDateTime.now().toString());
        response.put("demo", true);
        response.put("message", "This is a demo payment. No real transaction occurred.");

        // Add demo gateway credentials
        response.put("demoKeyId", "rzp_test_demo_1234567890");
        response.put("demoSecret", "demo_secret_abcdefghijklmnop");

        log.debug("Demo payment order created: {}", orderId);
        return response;
    }

    /**
     * Verify demo payment
     */
    public Map<String, Object> verifyDemoPayment(String orderId, String paymentId, String signature) {
        log.info("Verifying demo payment - Order: {}, Payment: {}", orderId, paymentId);

        // Simulate API call delay
        simulateProcessingDelay();

        // Simulate random failures based on success rate
        boolean isSuccess = Math.random() * 100 < successRate;

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", orderId);
        response.put("paymentId", paymentId);
        response.put("signature", signature);
        response.put("verified", true);
        response.put("success", isSuccess);
        response.put("timestamp", LocalDateTime.now().toString());
        response.put("demo", true);

        if (isSuccess) {
            response.put("status", "captured");
            response.put("message", "Demo payment verified successfully");
            log.info("Demo payment verified successfully for order: {}", orderId);
        } else {
            response.put("status", "failed");
            response.put("message", "Demo payment failed (simulated failure)");
            response.put("failureReason", "Insufficient funds (demo)");
            log.warn("Demo payment failed for order: {}", orderId);
        }

        return response;
    }

    /**
     * Generate demo payment receipt
     */
    public Map<String, Object> generateDemoReceipt(String paymentId, double amount) {
        log.info("Generating demo receipt for payment: {}", paymentId);

        simulateProcessingDelay();

        String receiptId = "RCPT_" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        Map<String, Object> receipt = new HashMap<>();
        receipt.put("receiptId", receiptId);
        receipt.put("paymentId", paymentId);
        receipt.put("amount", amount);
        receipt.put("currency", currency);
        receipt.put("date", LocalDateTime.now().toString());
        receipt.put("status", "PAID");
        receipt.put("paymentMethod", "DEMO_CARD");
        receipt.put("cardLast4", "4242");
        receipt.put("cardNetwork", "VISA");
        receipt.put("demo", true);
        receipt.put("note", "This is a demo receipt. No real transaction occurred.");

        // Add QR code data for receipt
        receipt.put("qrData", String.format("ParkEase|%s|%s|%.2f|%s",
                receiptId, paymentId, amount, LocalDateTime.now()));

        log.debug("Demo receipt generated: {}", receiptId);
        return receipt;
    }

    /**
     * Get demo payment status
     */
    public Map<String, Object> getPaymentStatus(String paymentId) {
        log.debug("Getting demo payment status for: {}", paymentId);

        simulateProcessingDelay();

        Map<String, Object> status = new HashMap<>();
        status.put("paymentId", paymentId);
        status.put("status", "captured");
        status.put("amount", 100.0); // Example amount
        status.put("currency", currency);
        status.put("createdAt", LocalDateTime.now().minusMinutes(5).toString());
        status.put("capturedAt", LocalDateTime.now().minusMinutes(4).toString());
        status.put("method", "card");
        status.put("cardLast4", "4242");
        status.put("bank", "DEMO BANK");
        status.put("wallet", null);
        status.put("vpa", null);
        status.put("email", "demo@example.com");
        status.put("contact", "+919876543210");
        status.put("demo", true);

        return status;
    }

    /**
     * Simulate processing delay for realistic demo experience
     */
    private void simulateProcessingDelay() {
        try {
            Thread.sleep(delayMilliseconds);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.warn("Payment simulation delay interrupted");
        }
    }

    /**
     * Check if demo mode is enabled
     */
    public boolean isDemoMode() {
        return demoMode;
    }

    /**
     * Get demo payment instructions
     */
    public Map<String, Object> getDemoInstructions() {
        Map<String, Object> instructions = new HashMap<>();
        instructions.put("mode", "DEMO");
        instructions.put("testCards", getTestCards());
        instructions.put("successRate", successRate + "%");
        instructions.put("currency", currency);
        instructions.put("note", "No real money is charged in demo mode");

        return instructions;
    }

    private Map<String, String> getTestCards() {
        Map<String, String> cards = new HashMap<>();
        cards.put("success", "4111 1111 1111 1111");
        cards.put("failure", "4000 0000 0000 0002");
        cards.put("authentication", "4000 0025 0000 3155");
        return cards;
    }
}
