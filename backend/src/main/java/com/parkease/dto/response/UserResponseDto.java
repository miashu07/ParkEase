package com.parkease.dto.response;

import java.util.List;

public record UserResponseDto(
    int id,
    String name,
    String email,
    String phone,
    List<String> roles
) {}