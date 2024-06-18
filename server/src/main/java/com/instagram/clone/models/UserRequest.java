package com.instagram.clone.models;

import lombok.Data;

@Data
public class UserRequest {
    private String name;
    private String lastName;
    private String email;
    private String password;
    private String userName;
}
