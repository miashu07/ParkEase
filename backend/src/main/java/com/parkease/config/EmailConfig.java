package com.parkease.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

/**
 * Email configuration for demo mode
 * Creates a mock JavaMailSender when email.demo-mode is true
 */
@Configuration
public class EmailConfig {

    @Bean
    @ConditionalOnProperty(name = "email.demo-mode", havingValue = "false", matchIfMissing = false)
    public JavaMailSender javaMailSender() {
        // Real mail sender configuration (not used in demo)
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        return mailSender;
    }

    @Bean
    @ConditionalOnProperty(name = "email.demo-mode", havingValue = "true", matchIfMissing = true)
    public JavaMailSender demoMailSender() {
        // Mock mail sender for demo mode
        return new JavaMailSenderImpl(); // Returns a basic implementation that doesn't send real emails
    }
}
