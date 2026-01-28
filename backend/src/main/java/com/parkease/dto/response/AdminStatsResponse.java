package com.parkease.dto.response;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminStatsResponse {

    private double totalRevenue;
    private long activeReservations;
    private long totalUsers;
    private double occupancyRate;
    private List<Map<String, Object>> weeklyPeakHours;

}