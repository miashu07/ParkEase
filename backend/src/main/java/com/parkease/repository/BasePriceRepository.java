package com.parkease.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.parkease.entity.BasePrice;
import com.parkease.enums.VehicleType;

public interface BasePriceRepository extends JpaRepository<BasePrice, Long> {
    Optional<BasePrice> findByVehicleType(VehicleType vehicleType);
}
