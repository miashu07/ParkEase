package com.parkease.scheduler;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.Reservation;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.ReservationRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ReservationExpiryScheduler {

    private final ReservationRepository reservationRepository;
    private final ParkingSlotRepository parkingSlotRepository;

    // Runs every 60 seconds
    @Scheduled(fixedRate = 60000)
    public void expireReservations() {

        List<Reservation> expired =
                reservationRepository.findExpiredReservations(LocalDateTime.now());

        for (Reservation r : expired) {
            r.setStatus(Reservation.ReservationStatus.EXPIRED);

            ParkingSlot slot = r.getSlot();
            slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

            reservationRepository.save(r);
            parkingSlotRepository.save(slot);
        }
    }
}
