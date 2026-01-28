package com.parkease.dto.response;

public record VehicleResponseDto(
    Long id,
    String plateNumber,
    String modelName,
    int modelYear,
    double vehicleWidth,
    double vehicleDepth,
    String type
) {}