// src/main/java/com/parkease/seeder/DemoDataSeeder.java
package com.parkease.seeder;

import com.parkease.entity.*;
import com.parkease.enums.VehicleType;
import com.parkease.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Component
@RequiredArgsConstructor
@Slf4j
public class DemoDataSeeder implements CommandLineRunner {

    @Value("${demo.data.enabled:false}")
    private boolean demoDataEnabled;

    @Value("${demo.data.users.count:5}")
    private int usersCount;

    @Value("${demo.data.zones.count:2}")
    private int zonesCount;

    @Value("${demo.data.slots.per-zone:10}")
    private int slotsPerZone;

    @Value("${demo.data.reservations.count:20}")
    private int reservationsCount;

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ParkingZoneRepository parkingZoneRepository;
    private final ParkingSlotRepository parkingSlotRepository;
    private final ReservationRepository reservationRepository;
    private final BasePriceRepository basePriceRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        if (!demoDataEnabled) {
            log.info("Demo data seeding is disabled");
            return;
        }

        log.info("<<<< FORCE-RESEEDING DEMO DATA >>>>");

        try {
            // Delete in order to avoid FK constraints
            reservationRepository.deleteAllInBatch();
            parkingSlotRepository.deleteAllInBatch();
            parkingZoneRepository.deleteAllInBatch();
            log.info("✅ Database cleaned");
        } catch (Exception e) {
            log.warn("⚠️ Error during cleanup (might be due to constraints): {}", e.getMessage());
        }

        // Ensure roles exist
        seedRoles();

        // Ensure base prices exist
        seedBasePrices();

        // Seed admin user
        seedAdminUser();

        // Seed demo users
        seedDemoUsers();

        // Seed parking zones
        seedParkingZones();

        // Seed parking slots
        seedParkingSlots();

        // Seed demo reservations
        seedDemoReservations();

        log.info("✅ Demo data seeding completed successfully");
        log.info("Zone Count: {}", parkingZoneRepository.count());
        log.info("Slot Count: {}", parkingSlotRepository.count());
    }

    private void seedRoles() {
        if (roleRepository.count() == 0) {
            Role userRole = new Role("ROLE_USER");
            Role adminRole = new Role("ROLE_ADMIN");

            roleRepository.saveAll(Arrays.asList(userRole, adminRole));
            log.info("Roles seeded: USER, ADMIN");
        }
    }

    private void seedBasePrices() {
        if (basePriceRepository.count() == 0) {
            List<BasePrice> prices = Arrays.asList(
                    createBasePrice(VehicleType.TWO_WHEELER, 30.0),
                    createBasePrice(VehicleType.HATCHBACK, 50.0),
                    createBasePrice(VehicleType.SUV, 70.0),
                    createBasePrice(VehicleType.MINI_BUS, 100.0));

            basePriceRepository.saveAll(prices);
            log.info("Base prices seeded for all vehicle types");
        }
    }

    private BasePrice createBasePrice(VehicleType type, double price) {
        BasePrice basePrice = new BasePrice();
        basePrice.setVehicleType(type);
        basePrice.setPricePerHour(price);
        return basePrice;
    }

    private void seedAdminUser() {
        if (!userRepository.existsByEmail("admin@parkease.com")) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

            User admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@parkease.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setPhone("9999988888");
            admin.setVerified(true);
            admin.setRoles(List.of(adminRole));

            userRepository.save(admin);
            log.info("Admin user seeded");
        }
    }

    private void seedDemoUsers() {
        if (userRepository.count() <= 2) { // Only admin and maybe one user exist
            Role userRole = roleRepository.findByName("ROLE_USER")
                    .orElseThrow(() -> new RuntimeException("ROLE_USER not found"));

            List<User> users = new ArrayList<>();

            // Create primary demo user
            User demoUser = new User();
            demoUser.setName("Demo User");
            demoUser.setEmail("user@example.com");
            demoUser.setPassword(passwordEncoder.encode("password123"));
            demoUser.setPhone("8888877777");
            demoUser.setVerified(true);
            demoUser.setRoles(List.of(userRole));
            users.add(demoUser);

            // Create additional demo users
            for (int i = 1; i <= usersCount - 1; i++) {
                User user = new User();
                user.setName("User " + i);
                user.setEmail("user" + i + "@example.com");
                user.setPassword(passwordEncoder.encode("password123"));
                user.setPhone("700000000" + i);
                user.setVerified(true);
                user.setRoles(List.of(userRole));
                users.add(user);
            }

            userRepository.saveAll(users);
            log.info("Seeded {} demo users", users.size());
        }
    }

    private void seedParkingZones() {
        if (parkingZoneRepository.count() == 0) {
            List<ParkingZone> zones = Arrays.asList(
                    createZone("Downtown Parking", "Main Street, City Center", 50, true),
                    createZone("Mall Parking", "Shopping Complex Area", 80, true),
                    createZone("Airport Parking", "International Airport", 120, true),
                    createZone("Hospital Parking", "City General Hospital", 40, true),
                    createZone("Station Parking", "Central Railway Station", 60, true))
                    .subList(0, Math.min(zonesCount, 5));

            parkingZoneRepository.saveAll(zones);
            log.info("Seeded {} parking zones", zones.size());
        }
    }

    private ParkingZone createZone(String name, String location, int capacity, boolean active) {
        ParkingZone zone = new ParkingZone();
        zone.setName(name);
        zone.setLocation(location);
        zone.setTotalSlots(capacity);
        zone.setActive(active);
        return zone;
    }

    private void seedParkingSlots() {
        List<ParkingZone> zones = parkingZoneRepository.findAll();
        List<ParkingSlot> slotsToSave = new ArrayList<>();

        for (ParkingZone zone : zones) {
            long existingSlotsCount = parkingSlotRepository.countByParkingZone(zone);
            if (existingSlotsCount == 0) {
                log.info("Seeding {} slots for zone: {}", slotsPerZone, zone.getName());
                for (int i = 1; i <= slotsPerZone; i++) {
                    ParkingSlot slot = new ParkingSlot();
                    slot.setSlotNumber("S" + String.format("%03d", i));
                    slot.setParkingZone(zone);
                    slot.setStatus(ParkingSlot.SlotStatus.AVAILABLE);
                    slotsToSave.add(slot);
                }
            }
        }

        if (!slotsToSave.isEmpty()) {
            parkingSlotRepository.saveAll(slotsToSave);
            log.info("Seeded {} new parking slots", slotsToSave.size());
        }
    }

    private void seedDemoReservations() {
        if (reservationRepository.count() == 0) {
            List<User> users = userRepository.findAll()
                    .stream()
                    .filter(u -> u.getEmail().contains("@example.com"))
                    .toList();

            List<ParkingSlot> slots = parkingSlotRepository.findAll();

            if (users.isEmpty() || slots.isEmpty()) {
                log.warn("Cannot seed reservations: insufficient users or slots");
                return;
            }

            List<Reservation> reservations = new ArrayList<>();

            for (int i = 0; i < Math.min(reservationsCount, 50); i++) {
                try {
                    Reservation reservation = createDemoReservation(
                            users.get(i % users.size()),
                            slots.get(i % slots.size()));
                    reservations.add(reservation);
                } catch (Exception e) {
                    log.warn("Failed to create demo reservation {}: {}", i, e.getMessage());
                }
            }

            reservationRepository.saveAll(reservations);
            log.info("Seeded {} demo reservations", reservations.size());
        }
    }

    private Reservation createDemoReservation(User user, ParkingSlot slot) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startTime = now.minusDays(ThreadLocalRandom.current().nextInt(1, 30));
        LocalDateTime endTime = startTime.plusHours(ThreadLocalRandom.current().nextInt(1, 8));

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setSlot(slot);
        reservation.setStartTime(startTime);
        reservation.setEndTime(endTime);

        // Random status
        String[] statuses = { "CONFIRMED", "COMPLETED", "CANCELLED" };
        Reservation.ReservationStatus status = Reservation.ReservationStatus.valueOf(
                statuses[ThreadLocalRandom.current().nextInt(statuses.length)]);
        reservation.setStatus(status);

        // Calculate amount
        long hours = java.time.Duration.between(startTime, endTime).toHours();
        double amount = hours * 50.0; // Base rate

        reservation.setAmount(amount);
        reservation.setCreatedAt(startTime.minusMinutes(30));

        return reservation;
    }
}