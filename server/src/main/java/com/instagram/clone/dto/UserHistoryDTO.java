package com.instagram.clone.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserHistoryDTO {

    private Long historyId;

    private Long id;

    private String imageProfile;

    private String userName;

    private String name;

    private String lastName;

    private Boolean verified;
}
