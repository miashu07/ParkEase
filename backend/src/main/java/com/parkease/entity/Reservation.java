package com.parkease.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
	    name = "reservations",
	    indexes = {
	        @Index(name = "idx_res_status", columnList = "status"),
	        @Index(name = "idx_res_start", columnList = "startTime"),
	        @Index(name = "idx_res_user", columnList = "user_id")
	    }
	)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // USER who booked
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // SLOT booked
    @ManyToOne
    @JoinColumn(name = "slot_id", nullable = false)
    private ParkingSlot slot;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReservationStatus status;

    // VEHICLE details (separate entity as per design)
    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Vehicle vehicle;

    // PAYMENT transaction (receipt backbone)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_tx_id")
    private PaymentTransaction paymentTransaction;

    // TOTAL AMOUNT
    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum ReservationStatus {
        PENDING,
        CONFIRMED,
        CANCELLED,
        EXPIRED
    }
}
