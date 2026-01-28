// PaymentService.java
package com.parkease.service;

import com.parkease.dto.request.PaymentRequest;

import java.util.Map;

public interface PaymentService {
    Map<String, Object> initiatePayment(PaymentRequest request);
    void verifyWebhookSignature(String payload);
    // Add other payment methods as needed
}