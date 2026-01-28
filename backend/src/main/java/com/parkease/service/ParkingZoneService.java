package com.parkease.service;

import java.util.List;

import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import com.parkease.dto.request.ParkingZoneDto;
import com.parkease.dto.response.ParkingZoneResponseDto;
import com.parkease.entity.ParkingZone;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingZoneRepository;
import com.parkease.util.ParkingZoneMapper;

import lombok.RequiredArgsConstructor;

@Service
@CacheConfig(cacheNames = {"parkingZones"})
@RequiredArgsConstructor
public class ParkingZoneService {
    
    private final ParkingZoneRepository parkingZoneRepository;

   

    // Create a new parking zone
    @CacheEvict(key = "'allZones'")
    public ParkingZoneResponseDto createParkingZone(ParkingZoneDto parkingZoneDto) {
        ParkingZone parkingZone = ParkingZoneMapper.toEntity(parkingZoneDto);
        return ParkingZoneMapper.toResponseDto(parkingZoneRepository.save(parkingZone));
    }

    // List all parking zones (optionally filtered by location)
   
    public List<ParkingZoneResponseDto> getAllParkingZonesList(String location) {
        List<ParkingZone> zones;
        if (location != null && !location.isBlank()) {
            zones = parkingZoneRepository.findByLocationContainingIgnoreCase(location);
        } else {
            zones = parkingZoneRepository.findAll();
        }
        return zones.stream()
            .map(ParkingZoneMapper::toResponseDto)
            .toList();
    }

    // Find zone by name
    public ParkingZone getByName(String name) {
        return parkingZoneRepository.findByNameIgnoreCase(name)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found with name " + name));
    }

    // Get parking zone by ID
    public ParkingZoneResponseDto getParkingZoneById(int id) {
        return parkingZoneRepository.findById(id)
            .map(ParkingZoneMapper::toResponseDto)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found with id " + id));
    }

    // Update parking zone
    public ParkingZoneResponseDto updateParkingZone(int id, ParkingZoneDto parkingZoneDto) {
        ParkingZone parkingZone = parkingZoneRepository.findById( id)
            .orElseThrow(() -> new ResourceNotFoundException("ParkingZone not found"));
        parkingZone.setName(parkingZoneDto.name());
        parkingZone.setLocation(parkingZoneDto.location());
        parkingZone.setActive(parkingZoneDto.isActive());
        return ParkingZoneMapper.toResponseDto(parkingZoneRepository.save(parkingZone));
    } 
    
    // Delete parking zone
    public void deleteParkingZone(int id) {
        parkingZoneRepository.deleteById( id);
    }
}