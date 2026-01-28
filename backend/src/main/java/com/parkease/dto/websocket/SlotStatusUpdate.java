package com.parkease.dto.websocket;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SlotStatusUpdate {
    private Integer zoneId;
    private Integer slotId;
    private String slotNumber;
    private String status; // AVAILABLE, RESERVED, OCCUPIED
    private String updateType; // STATUS_CHANGE, ADDED, REMOVED
    private Long timestamp;
}