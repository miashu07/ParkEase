package com.parkease.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.parkease.entity.Reservation;
import com.parkease.entity.User;

import lombok.RequiredArgsConstructor;

//Add EmailService
@Service
@RequiredArgsConstructor
public class EmailService {
 
 @Value("${spring.mail.username}")
 private String fromEmail;
 
 private final JavaMailSender mailSender;
 
 public void sendBookingConfirmation(User user, Reservation reservation) {
     SimpleMailMessage message = new SimpleMailMessage();
     message.setFrom(fromEmail);
     message.setTo(user.getEmail());
     message.setSubject("ParkEase - Booking Confirmation #" + reservation.getId());
     message.setText(createBookingEmailContent(user, reservation));
     mailSender.send(message);
 }
 
 private String createBookingEmailContent(User user, Reservation reservation) {
     return String.format("""
         Dear %s,
         
         Your parking reservation has been confirmed!
         
         Reservation Details:
         - Booking ID: %s
         - Parking Zone: %s
         - Slot Number: %s
         - Start Time: %s
         - End Time: %s
         - Amount Paid: ₹%.2f
         
         Thank you for using ParkEase!
         
         Best regards,
         ParkEase Team
         """, 
         user.getName(),
         reservation.getId(),
         reservation.getSlot().getParkingZone().getName(),
         reservation.getSlot().getSlotNumber(),
         reservation.getStartTime(),
         reservation.getEndTime(),
         reservation.getAmount()
     );
 }
}