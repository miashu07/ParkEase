package com.parkease.util;

import com.parkease.dto.request.ReservationRequest;
import com.parkease.dto.response.ReservationResponseDto;
import com.parkease.entity.Reservation;
import org.springframework.stereotype.Component;

@Component
public class ReservationMapper {

    public ReservationResponseDto toDto(Reservation r) {

        ReservationResponseDto dto = new ReservationResponseDto();

        dto.setId(r.getId());
        dto.setStartTime(r.getStartTime());
        dto.setEndTime(r.getEndTime());
        dto.setStatus(r.getStatus().name());
        dto.setAmount(r.getAmount());

        if (r.getSlot() != null) {
            dto.setSlotId(r.getSlot().getId());
            dto.setSlotNumber(r.getSlot().getSlotNumber());

            if (r.getSlot().getParkingZone() != null) {
                dto.setParkingZoneId(
                        r.getSlot().getParkingZone().getId()
                );
                dto.setZoneName(
                        r.getSlot().getParkingZone().getName()
                );
            }
        }

        if (r.getVehicle() != null) {
            dto.setVehicleType(
                    r.getVehicle().getVehicleType().name()
            );
            dto.setVehicleNumber(
                    r.getVehicle().getVehicleNumber()
            );
        }

        if (r.getPaymentTransaction() != null) {
            dto.setPaymentMode(
                    r.getPaymentTransaction().getPaymentMode()
            );
            dto.setTransactionId(
                    String.valueOf(
                            r.getPaymentTransaction().getId()
                    )
            );
        }

        return dto;
    }
}
