package com.instagram.clone.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank(message = "name is mandatory")
    @Column(name = "name")
    private String name;

    @NotBlank(message = "last name is mandatory")
    @Column(name = "last_name")
    private String lastName;

    @NotBlank(message = "email is mandatory")
    @Email(message = "invalid email")
    @Column(name = "email")
    private String email;

    @NotBlank(message = "password is mandatory")
    @Column(name = "password")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @NotBlank(message = "username is mandatory")
    //validar para que sea unico
    @Size(min = 3, max=20, message = "username size must be between 2 and 50")
    @Column(name = "user_name")
    private String userName;

    @Column(name = "verified")
    private Boolean verified;

    @Column(name = "image_profile")
    private String imageProfile;

    @Column(name = "description")
    private String description;

    @Column(name = "link")
    private String link;

    @Column(name = "number_post")
    private Long numberPost;

    @Column(name = "number_followers")
    private Long numberFollowers;

    @Column(name = "number_following")
    private Long numberFollowing;
}
