package com.instagram.clone.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private Long id;
    private UserDTO user;
    private String content;
    private LocalDate createdAt;
    private Integer likes;
    private Boolean liked;
}
