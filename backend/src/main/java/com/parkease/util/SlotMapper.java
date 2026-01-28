package com.parkease.util;

import com.parkease.dto.request.SlotDto;
import com.parkease.dto.response.SlotResponseDto;
import com.parkease.entity.ParkingSlot;
import org.springframework.stereotype.Component;

@Component
public class SlotMapper {

    public static ParkingSlot toEntity(SlotDto dto) {
        if (dto == null) return null;

        ParkingSlot slot = new ParkingSlot();
        slot.setSlotNumber(dto.slotNumber());
        return slot;
    }

    public SlotResponseDto toDto(ParkingSlot slot) {
        SlotResponseDto dto = new SlotResponseDto();
        dto.setId(slot.getId());
        dto.setSlotNumber(slot.getSlotNumber());
        dto.setStatus(slot.getStatus().name());
        return dto;
    }

}