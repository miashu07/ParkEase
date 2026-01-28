package com.parkease.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkease.entity.ParkingZone;

@Repository
public interface ParkingZoneRepository extends JpaRepository<ParkingZone, Integer> {
    Optional<ParkingZone> findByNameIgnoreCase(String name);
    List<ParkingZone> findByLocationContainingIgnoreCase(String location);
}