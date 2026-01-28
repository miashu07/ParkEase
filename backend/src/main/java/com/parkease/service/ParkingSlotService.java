package com.parkease.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.ParkingZone;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.ParkingZoneRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParkingSlotService {

    private final ParkingSlotRepository parkingSlotRepository;
    private final ParkingZoneRepository parkingZoneRepository;

    // -------------------------------
    // ADD SLOT TO ZONE (ADMIN)
    // -------------------------------
    @Transactional
    public ParkingSlot createSlot(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        ParkingSlot slot = new ParkingSlot();
        slot.setParkingZone(zone);
        slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

        return parkingSlotRepository.save(slot);
    }

    // -------------------------------
    // GET ALL SLOTS OF A ZONE (ADMIN)
    // -------------------------------
    public List<ParkingSlot> getSlotsByZone(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        return parkingSlotRepository.findByParkingZone(zone);
    }

    // -------------------------------
    // UPDATE SLOT STATUS (ADMIN)
    // -------------------------------
    @Transactional
    public ParkingSlot updateSlotStatus(Integer slotId, String status) {

        ParkingSlot slot = parkingSlotRepository.findById(slotId)
                .orElseThrow(() -> new ResourceNotFoundException("Slot not found"));

        slot.setStatus(ParkingSlot.SlotStatus.valueOf(status));

        return parkingSlotRepository.save(slot);
    }
    
    public List<ParkingSlot> getAvailableSlots(Integer zoneId) {

        ParkingZone zone = parkingZoneRepository.findById(zoneId)
                .orElseThrow(() -> new ResourceNotFoundException("Zone not found"));

        return parkingSlotRepository.findByParkingZoneAndStatus(
                zone,
                ParkingSlot.SlotStatus.AVAILABLE
        );
    }
}
