package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "message")
@Data
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "userName")
    private String userName;

    @JoinColumn(name = "content")
    private String content;

    @JoinColumn(name = "timestamp")
    private LocalDate timestamp;
}
