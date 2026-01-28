// DemoPaymentServiceImpl.java  
package com.parkease.service;

import com.parkease.dto.request.PaymentRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class DemoPaymentServiceImpl implements PaymentService {
    
    private final DemoPaymentService demoPaymentService;

    @Override
    public Map<String, Object> initiatePayment(PaymentRequest request) {
        log.info("DEMO MODE: Initiating demo payment for reservation: {}", request.reservationId());
        
        Map<String, Object> demoResponse = new HashMap<>();
        demoResponse.put("mode", "DEMO");
        demoResponse.put("reservationId", request.reservationId());
        demoResponse.put("amount", request.amount());
        demoResponse.put("message", "Demo payment initiated - use test card: 4111 1111 1111 1111");
        demoResponse.put("instructions", demoPaymentService.getDemoInstructions());
        
        return demoResponse;
    }

    @Override
    public void verifyWebhookSignature(String payload) {
        log.info("DEMO MODE: Processing webhook");
        // Demo implementation - no real verification needed
    }
}