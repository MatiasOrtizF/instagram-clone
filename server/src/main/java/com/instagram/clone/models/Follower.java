package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "follower")
public class Follower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "follower_user_id")
    private User followerUser;  // Usuario que sigue a otro usuario

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "following_user_id")
    private User followingUser; // Usuario que está siendo seguido
}
