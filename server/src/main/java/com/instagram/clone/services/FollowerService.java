package com.instagram.clone.services;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Follower;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.FollowerRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowerService {

    private final FollowerRepository followerRepository;
    private final AuthService authService;
    private final UserRepository userRepository;

    @Autowired
    public FollowerService (FollowerRepository followerRepository, AuthService authService, UserRepository userRepository) {
        this.followerRepository = followerRepository;
        this.authService = authService;
        this.userRepository = userRepository;
    }

    public List<Follower> getAllFollowers(String token, Long id) {
        if(authService.validationToken(token)) {
            return followerRepository.findByFollowingUser_Id(id);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
