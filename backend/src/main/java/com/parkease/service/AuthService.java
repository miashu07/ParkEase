package com.parkease.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.parkease.dto.request.LoginRequest;
import com.parkease.dto.request.RegisterRequest;
import com.parkease.dto.response.LoginResponse;
import com.parkease.dto.response.RegisterUserResponseDto;
import com.parkease.entity.Role;
import com.parkease.entity.User;
import com.parkease.repository.RoleRepository;
import com.parkease.repository.UserRepository;
import com.parkease.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authManager;
    private final CustomUserDetailsService userDetailsService;

    // Register a new user
    public RegisterUserResponseDto registerUser(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Email already registered");
        }

        List<Role> roles = new ArrayList<>();
        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Role not found"));
        roles.add(userRole);

        User user = new User();
        user.setName(request.name());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setPhone(request.phone());
        user.setRoles(roles);
        user.setVerified(true); // Auto-verify for simplicity

        userRepository.save(user);

        return new RegisterUserResponseDto(
                user.getId().intValue(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRoles());
    }

    // Authenticate user and generate token
    public Object authenticateUser(LoginRequest request) {

        // Authenticate with Spring Security
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));

        // Load UserDetails
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.email());

        // Fetch full user from DB
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Get first role (ADMIN or USER)
        String role = user.getRoles().isEmpty() ? "ROLE_USER" : user.getRoles().get(0).getName();

        // Generate token using UserDetails
        String token = jwtUtil.generateToken(userDetails);

        // Return full login response
        return new LoginResponse(
                token,
                role,
                user.getEmail(),
                user.getName());
    }
}
