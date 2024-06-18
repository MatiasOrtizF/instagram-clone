package com.instagram.clone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;


@Data
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_user")
    private User user;

    @NotBlank(message = "image is mandatory")
    @Column(name = "image", nullable = false)
    private String image;

    @NotBlank(message = "content is mandatory")
    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "likes", nullable = false)
    private Integer likes;

    @Column(name = "comments", nullable = false)
    private Integer comments;

    @Column(name = "createdAt", nullable = false)
    private LocalDate createdAt;
}
