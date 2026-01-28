package com.parkease.seeder;

import java.util.Collections;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.parkease.entity.Role;
import com.parkease.entity.User;
import com.parkease.repository.RoleRepository;
import com.parkease.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.existsByEmail("admin@parkease.com")) {
            Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                    .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

            User admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@parkease.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setPhone("0000000000");
            admin.setVerified(true);
            admin.setRoles(Collections.singletonList(adminRole));

            userRepository.save(admin);
            System.out.println("Admin user seeded: admin@parkease.com / admin123");
        }
    }
}