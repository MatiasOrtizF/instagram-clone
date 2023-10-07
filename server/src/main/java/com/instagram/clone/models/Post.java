package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

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

    @Column(name = "content")
    private String content;

    @Column(name = "createdAt")
    private Date createdAt;

    @Column(name = "likes;")
    private Integer likes;

    @Column(name = "image")
    private String image;
}
