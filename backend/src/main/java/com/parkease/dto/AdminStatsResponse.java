package com.parkease.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdminStatsResponse {

    private long totalReservations;
    private double occupancyRate;
}
