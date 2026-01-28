package com.parkease.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SlotDto(
    @NotBlank String slotNumber,
    @NotNull Long parkingZoneId
) {}