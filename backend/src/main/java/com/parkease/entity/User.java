package com.parkease.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
   
    @Column(nullable = false)
    private String password;
  
    @Column(unique = true, nullable = false)
    private String phone;
   
    @Column(name = "is_verified", columnDefinition ="boolean default false")
    private boolean isVerified;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;
 
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDate createdAt;

    // Removed unnecessary fields not in synopsis (verificationCode, expirationTime, updatedAt, lists)
    // Keeping lists might be useful for JPA but synopsis didn't explicitly list them in the fields list, 
    // but implied relationships. I'll keep them out for strict adherence or add if needed.
    // Synopsis: "roles (ManyToMany)" is listed. "reservationList" is not explicitly listed in User fields but Reservation has "user (ManyToOne)".
}