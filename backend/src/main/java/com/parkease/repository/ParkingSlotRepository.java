package com.parkease.repository;

import java.util.List;

import com.parkease.entity.ParkingZone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.parkease.entity.ParkingSlot;
import com.parkease.entity.ParkingSlot.SlotStatus;

@Repository
public interface ParkingSlotRepository extends JpaRepository<ParkingSlot, Integer> {

  @Query("""
      SELECT s
      FROM ParkingSlot s
      WHERE s.parkingZone.id = :zoneId
        AND s.status = com.parkease.entity.ParkingSlot.SlotStatus.AVAILABLE
      """)
  List<ParkingSlot> findAvailableSlotsByZone(@Param("zoneId") Integer zoneId);

  List<ParkingSlot> findByParkingZoneIdAndStatus(
      Integer zoneId,
      ParkingSlot.SlotStatus status);

  @Query("SELECT z FROM ParkingZone z WHERE z.id = :zoneId")
  ParkingZone getZoneReference(@Param("zoneId") Integer zoneId);

  long countByStatus(ParkingSlot.SlotStatus status);

  List<ParkingSlot> findByParkingZone(ParkingZone parkingZone);

  long countByParkingZone(ParkingZone parkingZone);

  List<ParkingSlot> findByParkingZoneAndStatus(ParkingZone zone, ParkingSlot.SlotStatus status);
}
