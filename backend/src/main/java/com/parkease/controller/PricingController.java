package com.parkease.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.parkease.entity.BasePrice;
import com.parkease.repository.BasePriceRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/pricing")
@RequiredArgsConstructor
public class PricingController {

    private final BasePriceRepository basePriceRepository;

    // GET ALL PRICES
    @GetMapping
    public ResponseEntity<List<BasePrice>> getAllPrices() {
        return ResponseEntity.ok(basePriceRepository.findAll());
    }

    // UPDATE PRICE
    @PutMapping("/{id}")
    public ResponseEntity<BasePrice> updatePrice(@PathVariable Long id,
                                                 @RequestBody BasePrice updated) {

        BasePrice price = basePriceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Price not found"));

        price.setPricePerHour(updated.getPricePerHour());

        return ResponseEntity.ok(basePriceRepository.save(price));
    }
}
