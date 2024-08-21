package com.instagram.clone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotBlank(message = "name is mandatory")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "last name is mandatory")
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @NotBlank(message = "email is mandatory")
    @Email(message = "invalid email")
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NotBlank(message = "password is mandatory")
    @Column(name = "password", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @NotBlank(message = "username is mandatory")
    @Size(min = 3, max=20, message = "username size must be between 2 and 50")
    @Column(name = "user_name", nullable = false, unique = true)
    private String userName;

    @Column(name = "verified", nullable = false)
    private Boolean verified;

    @Column(name = "image_profile")
    private String imageProfile;

    @Column(name = "description")
    private String description;

    @Column(name = "link")
    private String link;

    @Column(name = "number_post", nullable = false)
    private Long numberPost;

    @Column(name = "number_followers", nullable = false)
    private Long numberFollowers;

    @Column(name = "number_following", nullable = false)
    private Long numberFollowing;

    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> post;
}
