package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "post_like")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "id_user")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private User user;

    @JoinColumn(name = "id_post")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private Post post;
}
