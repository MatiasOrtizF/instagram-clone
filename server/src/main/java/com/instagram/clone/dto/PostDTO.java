package com.instagram.clone.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    private Long id;
    private UserPostDTO user;
    private String image;
    private Integer likes;
    private String content;
    private Integer comments;
    private LocalDate createdAt;
    private Boolean isLiked;
    private Boolean isSaved;
}
