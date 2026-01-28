package com.parkease.seeder;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class RoleSeeder implements CommandLineRunner {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public void run(String... args) {

        Long count = ((Number) em
                .createNativeQuery("SELECT COUNT(*) FROM roles")
                .getSingleResult())
                .longValue();

        if (count == 0) {
            em.createNativeQuery(
                "INSERT INTO roles (id, name) VALUES (1, 'ROLE_USER')"
            ).executeUpdate();

            em.createNativeQuery(
                "INSERT INTO roles (id, name) VALUES (2, 'ROLE_ADMIN')"
            ).executeUpdate();

            System.out.println("Roles seeded successfully!");
            System.out.println("ROLE_USER ---> 1 , ROLE_ADMIN ---> 2");
        }
    }
}
