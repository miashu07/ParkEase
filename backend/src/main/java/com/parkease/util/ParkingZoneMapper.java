package com.parkease.util;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.dto.response.ParkingZoneResponseDto;
import com.parkease.entity.ParkingZone;

public class ParkingZoneMapper {

    public static ParkingZone toEntity(ParkingZoneDto dto) {
        if (dto == null) return null;

        ParkingZone parkingZone = new ParkingZone();
        parkingZone.setName(dto.name());       
        parkingZone.setLocation(dto.location());
        parkingZone.setTotalSlots(dto.capacity());
        parkingZone.setActive(dto.isActive());

        return parkingZone;
    }

    public static ParkingZoneResponseDto toResponseDto(ParkingZone parkingZone) {
        if (parkingZone == null) return null;

        return new ParkingZoneResponseDto(
                parkingZone.getId(),
                parkingZone.getName(),
                parkingZone.getLocation(),
                parkingZone.isActive(),
                parkingZone.getTotalSlots()
        );
    }
}