package com.parkease.specification;

import org.springframework.data.jpa.domain.Specification;

import com.parkease.entity.Reservation;
import com.parkease.entity.Reservation.ReservationStatus;

import java.time.LocalDateTime;

public class ReservationSpecs {

    public static Specification<Reservation> hasUser(Integer userId) {
        return (root, query, builder) ->
                userId == null ? null : builder.equal(root.get("user").get("id"), userId);
    }

    public static Specification<Reservation> hasSlotId(Integer slotId) {
        return (root, query, builder) ->
                slotId == null ? null : builder.equal(root.get("slot").get("id"), slotId);
    }

    public static Specification<Reservation> hasParkingZoneId(Integer parkingZoneId) {
        return (root, query, builder) ->
                parkingZoneId == null ? null : builder.equal(root.get("slot").get("zone").get("id"), parkingZoneId);
    }

    public static Specification<Reservation> hasStatus(ReservationStatus status) {
        return (root, query, builder) ->
                status == null ? null : builder.equal(root.get("status"), status);
    }

    public static Specification<Reservation> betweenTime(LocalDateTime start, LocalDateTime end) {
        return (root, query, builder) -> {
            if (start == null && end == null) return null;
            if (start != null && end != null)
                return builder.between(root.get("startTime"), start, end);
            if (start != null)
                return builder.greaterThanOrEqualTo(root.get("startTime"), start);
            return builder.lessThanOrEqualTo(root.get("endTime"), end);
        };
    }
}