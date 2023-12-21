package com.instagram.clone.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "history")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "searching_user_id")
    private User searchingUser;  // Usuario buscando (yo)

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "searched_user_id")
    private User searchedUser; // Usuario buscado (otro)
}
