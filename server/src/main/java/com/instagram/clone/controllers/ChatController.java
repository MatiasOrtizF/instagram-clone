package com.instagram.clone.controllers;

import com.instagram.clone.models.Message;
import com.instagram.clone.repositories.MessageRepository;
import com.instagram.clone.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private MessageRepository messageRepository;

    @MessageMapping("/chat") // /app/message
    @SendTo("/chat/messages")
    private Message sendMessage(@Payload Message message) {
        System.out.println("mensaje recibido:" + message);
        simpMessagingTemplate.convertAndSend("/chat/messages", message);
        return message;
    }

    /*@MessageMapping("private-message")
    private Message receiverPrivateMessage(@Payload Message message) {
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "private", message); // /user/David/private
        return message;
    }*/
}
