package com.parkease.service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import com.parkease.enums.VehicleType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.parkease.dto.response.ReservationResponseDto;
import com.parkease.entity.ParkingSlot;
import com.parkease.entity.PaymentTransaction;
import com.parkease.entity.Reservation;
import com.parkease.entity.User;
import com.parkease.entity.Vehicle;
import com.parkease.exception.BadRequestException;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.ParkingSlotRepository;
import com.parkease.repository.PaymentTransactionRepository;
import com.parkease.repository.ReservationRepository;
import com.parkease.util.ReservationMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final ParkingSlotRepository parkingSlotRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final PricingService pricingService;
    private final ReservationMapper reservationMapper;

    // -------------------------------
    // CREATE RESERVATION
    // -------------------------------
    @Transactional
    public ReservationResponseDto createReservation(Integer slotId,
            LocalDateTime startTime,
            LocalDateTime endTime,
            String vehicleType,
            String vehicleNumber,
            User user) {

        if (startTime.isAfter(endTime) || startTime.isEqual(endTime)) {
            throw new BadRequestException("End time must be after start time");
        }

        ParkingSlot slot = parkingSlotRepository.findById(slotId)
                .orElseThrow(() -> new ResourceNotFoundException("Slot not found"));

        if (slot.getStatus() != ParkingSlot.SlotStatus.AVAILABLE) {
            throw new BadRequestException("Slot is not available");
        }

        boolean overlapping = reservationRepository.existsOverlappingReservation(slotId, startTime, endTime);

        if (overlapping) {
            throw new BadRequestException("Slot already reserved for selected time");
        }

        // -------------------------------
        // CREATE VEHICLE
        // -------------------------------
        Vehicle vehicle = new Vehicle();
        VehicleType type = VehicleType.valueOf(vehicleType);
        vehicle.setVehicleType(type);
        vehicle.setVehicleNumber(vehicleNumber);

        // -------------------------------
        // CALCULATE TOTAL HOURS (MIN 1 HOUR)
        // -------------------------------
        long hours = ChronoUnit.HOURS.between(startTime, endTime);
        if (hours <= 0) {
            hours = 1;
        }

        // -------------------------------
        // 🔥 CALCULATE AMOUNT (ADMIN BASE PRICING)
        // -------------------------------
        double amount = pricingService.calculatePriceByHours(type, (int) hours);

        // -------------------------------
        // CREATE RESERVATION
        // -------------------------------
        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setSlot(slot);
        reservation.setStartTime(startTime);
        reservation.setEndTime(endTime);
        reservation.setStatus(Reservation.ReservationStatus.PENDING);
        reservation.setAmount(amount);
        reservation.setVehicle(vehicle);

        vehicle.setReservation(reservation);

        reservationRepository.save(reservation);

        // 🔒 TEMPORARILY LOCK SLOT
        slot.setStatus(ParkingSlot.SlotStatus.RESERVED);
        parkingSlotRepository.save(slot);

        return reservationMapper.toDto(reservation);
    }

    // -------------------------------
    // CONFIRM PAYMENT (DEMO / QR)
    // -------------------------------
    @Transactional
    public ReservationResponseDto confirmPayment(Integer reservationId,
            double amount,
            String paymentMode) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));

        if (reservation.getStatus() != Reservation.ReservationStatus.PENDING) {
            throw new BadRequestException("Reservation already processed");
        }

        PaymentTransaction tx = new PaymentTransaction();
        tx.setReservation(reservation);
        tx.setAmount(amount > 0 ? amount : reservation.getAmount());
        tx.setPaymentMode(paymentMode);
        tx.setStatus(PaymentTransaction.PaymentStatus.SUCCESS);
        tx.setTransactionTime(LocalDateTime.now());

        paymentTransactionRepository.save(tx);

        // 🔥 CONFIRM RESERVATION
        reservation.setStatus(Reservation.ReservationStatus.CONFIRMED);
        reservation.setPaymentTransaction(tx);

        ParkingSlot slot = reservation.getSlot();
        slot.setStatus(ParkingSlot.SlotStatus.RESERVED);

        reservationRepository.save(reservation);
        parkingSlotRepository.save(slot);

        return reservationMapper.toDto(reservation);
    }

    // -------------------------------
    // USER RESERVATION HISTORY
    // -------------------------------
    public List<Reservation> getUserHistory(Integer userId) {
        return reservationRepository.findByUserId(userId);
    }

    // -------------------------------
    // CANCEL RESERVATION
    // -------------------------------
    @Transactional
    public Reservation cancelReservation(Integer reservationId, Integer userId) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));

        if (!reservation.getUser().getId().equals(userId)) {
            throw new BadRequestException("You can cancel only your own reservation");
        }

        if (reservation.getStatus() == Reservation.ReservationStatus.EXPIRED ||
                reservation.getStatus() == Reservation.ReservationStatus.CANCELLED) {
            throw new BadRequestException("Reservation is already inactive");
        }

        reservation.setStatus(Reservation.ReservationStatus.CANCELLED);

        ParkingSlot slot = reservation.getSlot();
        slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);

        parkingSlotRepository.save(slot);
        return reservationRepository.save(reservation);
    }

    public List<ReservationResponseDto> getReservationsByUser(Integer userId) {

        List<Reservation> reservations = reservationRepository.findByUserId(userId);

        return reservations.stream()
                .map(reservationMapper::toDto)
                .toList();
    }
}
