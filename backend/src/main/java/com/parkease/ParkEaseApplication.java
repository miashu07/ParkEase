package com.parkease;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // listens to entities that uses @CreatedDate @LastModifiedDate 
public class ParkEaseApplication {
	public static void main(String[] args) {
		SpringApplication.run(ParkEaseApplication.class, args);
	}
}
