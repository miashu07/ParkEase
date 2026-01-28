package com.parkease.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.parkease.entity.Reservation;
import com.parkease.entity.Reservation.ReservationStatus;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    // Expired pending reservations
    @Query("SELECT r FROM Reservation r WHERE r.status = 'PENDING' AND r.createdAt <= :expiryTime")
    List<Reservation> findExpiredReservations(@Param("expiryTime") LocalDateTime expiryTime);

    long countByStatus(ReservationStatus status);

    // Active reservations count
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.status = 'CONFIRMED'")
    long countActiveReservations();

    // Reservation history by user
    @Query("SELECT r FROM Reservation r WHERE r.user.id = :userId")
    List<Reservation> findByUserId(@Param("userId") Integer userId);

    // Check overlapping reservations
    @Query("""
        SELECT COUNT(r) > 0
        FROM Reservation r
        WHERE r.slot.id = :slotId
          AND r.status IN ('PENDING', 'CONFIRMED')
          AND (
               (:startTime BETWEEN r.startTime AND r.endTime)
            OR (:endTime BETWEEN r.startTime AND r.endTime)
            OR (r.startTime BETWEEN :startTime AND :endTime)
          )
    """)
    boolean existsOverlappingReservation(@Param("slotId") Integer slotId,
                                         @Param("startTime") LocalDateTime startTime,
                                         @Param("endTime") LocalDateTime endTime);

    // Pending reservations past start time
    @Query("""
        SELECT r FROM Reservation r
        WHERE r.status = 'PENDING'
          AND r.startTime < :now
    """)
    List<Reservation> findPendingReservationsPastStartTime(@Param("now") LocalDateTime now);

    // 🔥 TOTAL REVENUE (for admin dashboard)
    @Query("""
        SELECT COALESCE(SUM(r.amount), 0)
        FROM Reservation r
        WHERE r.status = 'CONFIRMED'
    """)
    double sumTotalRevenue();

    // 🔥 OCCUPANCY RATE (percentage of confirmed reservations vs total slots)
    @Query("""
    	    SELECT 
    	      CASE 
    	        WHEN (SELECT COUNT(s) FROM ParkingSlot s) = 0 THEN 0
    	        ELSE (COUNT(r) * 100.0) / (SELECT COUNT(s) FROM ParkingSlot s)
    	      END
    	    FROM Reservation r
    	    WHERE r.status = 'CONFIRMED'
    	""")
    	double calculateOccupancyRate();

  

}
