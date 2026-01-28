package com.parkease.dto.response;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class ReservationResponseDto {

    private Integer id;                  // booking id
    private Integer slotId;
    private String slotNumber;
    private Integer parkingZoneId;
    private String zoneName;

    private String vehicleType;
    private String vehicleNumber;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private String status;
    private double amount;

    private String paymentMode;
    private String transactionId;

}
