package com.parkease.controller;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.parkease.dto.websocket.ReservationUpdate;
import com.parkease.dto.websocket.SlotStatusUpdate;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class WebSocketController {
    
    private final SimpMessagingTemplate messagingTemplate;
    
    @MessageMapping("/reservation.update")
    public void sendReservationUpdate(ReservationUpdate update) {
        messagingTemplate.convertAndSend("/topic/reservations/" + update.getUserId(), update);
    }
    
    @MessageMapping("/slot.status")
    public void sendSlotStatusUpdate(SlotStatusUpdate update) {
        messagingTemplate.convertAndSend("/topic/slots/" + update.getZoneId(), update);
    }
}