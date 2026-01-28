package com.parkease.util;

import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.parkease.dto.request.RegisterRequest;
import com.parkease.dto.response.UserResponseDto;
import com.parkease.entity.Role;
import com.parkease.entity.User;

public class UserMapper {

    public static User toUser(RegisterRequest dto, PasswordEncoder passwordEncoder) {
        if (dto == null) return null;

        User user = new User();
        user.setName(dto.name());
        user.setEmail(dto.email());
        user.setPassword(passwordEncoder.encode(dto.password()));
        user.setPhone(dto.phone());
        
        return user;
    }

    public static UserResponseDto toUserResponseDto(User user) {
        if (user == null) return null;

        return new UserResponseDto(
                user.getId().intValue(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRoles().stream().map(Role::getName).collect(Collectors.toList())
        );
    }
}