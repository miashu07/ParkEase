package com.parkease.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.parkease.dto.response.AdminStatsResponse;
import com.parkease.repository.ReservationRepository;
import com.parkease.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminAnalyticsService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;

    public AdminStatsResponse getReports() {

        double totalRevenue = reservationRepository.sumTotalRevenue();
        long activeReservations = reservationRepository.countActiveReservations();
        long totalUsers = userRepository.count();
        double occupancyRate = reservationRepository.calculateOccupancyRate();

        // 🔥 WEEKLY PEAK HOURS (SAFE VERSION)
        Map<String, Long> peakMap = new LinkedHashMap<>();
        peakMap.put("MON", 0L);
        peakMap.put("TUE", 0L);
        peakMap.put("WED", 0L);
        peakMap.put("THU", 0L);
        peakMap.put("FRI", 0L);
        peakMap.put("SAT", 0L);
        peakMap.put("SUN", 0L);

        var reservations = reservationRepository.findAll();

        for (var r : reservations) {
            if (r.getStartTime() != null) {
                String day = r.getStartTime().getDayOfWeek().name().substring(0, 3);
                peakMap.put(day, peakMap.get(day) + 1);
            }
        }

        List<Map<String, Object>> weeklyPeakHours = new ArrayList<>();
        peakMap.forEach((day, count) -> {
            Map<String, Object> obj = new HashMap<>();
            obj.put("name", day);
            obj.put("count", count);
            weeklyPeakHours.add(obj);
        });

        return new AdminStatsResponse(
            totalRevenue,
            activeReservations,
            totalUsers,
            occupancyRate,
            weeklyPeakHours
        );
    }
}
