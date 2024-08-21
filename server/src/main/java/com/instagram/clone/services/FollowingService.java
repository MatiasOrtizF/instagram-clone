package com.instagram.clone.services;

import com.instagram.clone.dto.UserDTO;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Follower;
import com.instagram.clone.repositories.FollowerRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FollowingService {

    private final AuthService authService;
    private final FollowerRepository followerRepository;

    @Autowired
    public FollowingService (FollowerRepository followerRepository, AuthService authService, UserRepository userRepository) {
        this.followerRepository = followerRepository;
        this.authService = authService;
    }

    public List<UserDTO> getAllFollowing(Long userId, String token) {
        if(authService.validationToken(token)) {
            Long id = authService.getUserId(token);
            List<Follower> users = followerRepository.findByFollowerUser_Id(userId);

            List<Follower> newUsers =  users.stream()
                    .filter(user -> !user.getFollowingUser().getId().equals(id))
                    .toList();

            return newUsers.stream()
                    .map(following -> {
                        boolean isFollowed = followerRepository.existsByFollowingUser_IdAndFollowerUser_Id(following.getFollowingUser().getId(), id);
                        return new UserDTO(
                                following.getFollowingUser().getId(),
                                following.getFollowingUser().getImageProfile(),
                                following.getFollowingUser().getUserName(),
                                following.getFollowingUser().getName(),
                                following.getFollowingUser().getLastName(),
                                following.getFollowingUser().getVerified(),
                                isFollowed
                        );
                    })
                    .collect(Collectors.toList());

        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
