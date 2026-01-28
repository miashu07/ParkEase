package com.parkease.service;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.parkease.entity.BasePrice;
import com.parkease.enums.VehicleType;
import com.parkease.repository.BasePriceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PricingService {

	private final BasePriceRepository basePriceRepository;

	// -------------------------------
	// CALCULATE PRICE USING ADMIN BASE RATES
	// -------------------------------
	public double calculatePrice(VehicleType vehicleType, LocalDateTime startTime, LocalDateTime endTime) {

		if (vehicleType == null) {
			throw new RuntimeException("Vehicle type is required for pricing");
		}

		if (startTime == null || endTime == null || endTime.isBefore(startTime)) {
			throw new RuntimeException("Invalid start or end time");
		}

		// Calculate total hours (minimum 1 hour)
		long hours = Duration.between(startTime, endTime).toHours();
		if (hours <= 0) {
			hours = 1;
		}

		// Get base price from database (admin configured)
		BasePrice basePrice = basePriceRepository.findByVehicleType(vehicleType)
				.orElseThrow(() -> new RuntimeException("Base price not configured for " + vehicleType));

		// Final amount = hours × price per hour
		return hours * basePrice.getPricePerHour();
	}

	// -------------------------------
	// PREVIEW PRICE BY HOURS (FOR UI CALCULATOR)
	// -------------------------------
	public double calculatePriceByHours(VehicleType vehicleType, int hours) {

		if (vehicleType == null) {
			throw new RuntimeException("Vehicle type is required");
		}

		if (hours <= 0) {
			hours = 1;
		}

		BasePrice basePrice = basePriceRepository.findByVehicleType(vehicleType)
				.orElseThrow(() -> new RuntimeException("Base price not configured for " + vehicleType));

		return hours * basePrice.getPricePerHour();
	}
}
