package com.parkease.dto.response;

public record LoginResponse(
        String token,
        String role,
        String email,
        String name
) {}
