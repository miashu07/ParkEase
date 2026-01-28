package com.parkease.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {

        @Bean
        public UrlBasedCorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration config = new CorsConfiguration();

                // Allow frontend origin
                config.setAllowedOrigins(Arrays.asList(
                                "http://localhost:5173",
                                "http://localhost:3000"));

                // Allow all methods
                config.setAllowedMethods(Arrays.asList(
                                "GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));

                // Allow headers
                config.setAllowedHeaders(Arrays.asList(
                                "Authorization",
                                "Content-Type",
                                "Accept",
                                "Origin",
                                "X-Requested-With",
                                "Cache-Control"));

                // Expose response headers
                config.setExposedHeaders(Arrays.asList(
                                "Authorization",
                                "Content-Type"));

                // Allow credentials
                config.setAllowCredentials(true);

                // Cache preflight
                config.setMaxAge(3600L);

                // Apply to all endpoints
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", config);

                return source;
        }
}
