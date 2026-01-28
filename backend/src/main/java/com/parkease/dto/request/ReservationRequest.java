package com.parkease.dto.request;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReservationRequest {

    private Integer slotId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String vehicleType;
    private String vehicleNumber;
}
