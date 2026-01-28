package com.parkease.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record PaymentRequest(
    @NotNull Integer reservationId,
    @Positive double amount,
    String paymentMode
) {}