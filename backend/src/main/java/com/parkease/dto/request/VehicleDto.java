package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record VehicleDto(
    @NotBlank String plateNumber,
    @NotBlank String modelName,
    @Positive int modelYear,
    @Positive double vehicleWidth,
    @Positive double vehicleDepth,
    @NotBlank String type
) {}