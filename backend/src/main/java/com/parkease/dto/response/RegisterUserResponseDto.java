package com.parkease.dto.response;

import java.util.List;
import com.parkease.entity.Role;

public record RegisterUserResponseDto(
    int id,
    String name,
    String email,
    String phone,
    List<Role> roles
) {}