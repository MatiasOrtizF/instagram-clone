package com.instagram.clone.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDTO {
    private Long userId;
    private String imageProfile;
    private String userName;
}
