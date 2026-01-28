package com.parkease.service;

import com.parkease.dto.request.UpdateProfileRequest;
import com.parkease.entity.User;
import com.parkease.exception.ResourceNotFoundException;
import com.parkease.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    
    /**
     * Update user profile information
     */
    @Transactional
    public User updateProfile(Integer userId, UpdateProfileRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        if (request.name() != null && !request.name().isBlank()) {
            user.setName(request.name());
        }
        
        if (request.phone() != null && !request.phone().isBlank()) {
            user.setPhone(request.phone());
        }
        
        return userRepository.save(user);
    }
    
    /**
     * Get user by ID
     */
    public User getUserById(Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }
    
    /**
     * Get user by email
     */
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }
    
    /**
     * Check if email exists
     */
    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }
}