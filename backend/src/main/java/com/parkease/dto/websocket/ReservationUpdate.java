package com.parkease.dto.websocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReservationUpdate {
    private Integer userId;
    private Integer reservationId;
    private String status;
    private String message;
    private String updateType; // CREATED, UPDATED, CANCELLED, EXPIRED
    private Long timestamp;
}