package com.parkease.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parking_slots")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ParkingSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String slotNumber;

    // ✅ Rename zone → parkingZone (for mapper & service consistency)
    @ManyToOne
    @JoinColumn(name = "zone_id", nullable = false)
    private ParkingZone parkingZone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SlotStatus status;

    @Column(name = "qrcode_path")
    private String qrCodePath;

    // ✅ Must include OCCUPIED
    public enum SlotStatus {
        AVAILABLE,
        RESERVED,
        OCCUPIED
    }
}
