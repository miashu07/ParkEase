package com.parkease.dto.response;

public record ParkingZoneResponseDto(
    int id,
    String name,
    String location,
    boolean isActive,
    int capacity
) {}