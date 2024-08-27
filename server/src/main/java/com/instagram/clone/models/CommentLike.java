package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "comment_like")
public class CommentLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "id_user")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private User user;

    @JoinColumn(name = "id_comment")
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private Comment comment;
}
