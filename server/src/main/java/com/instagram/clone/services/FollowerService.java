package com.instagram.clone.services;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Follower;
import com.instagram.clone.models.Like;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.FollowerRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

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

    public Follower addFollow(Long followingUserId, String token) {
        if(authService.validationToken(token)) {
            Long followerUserId = authService.getUserId(token);
            if(!followerRepository.existsByFollowingUser_IdAndFollowerUser_Id(followingUserId, followerUserId)) {
                User userFollowing = userRepository.findById(followingUserId).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + followingUserId + " is incorrect"));
                User userFollower = userRepository.findById(followerUserId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + followerUserId + " is incorrect"));

                Follower follower = new Follower();
                follower.setFollowingUser(userFollowing);
                follower.setFollowerUser(userFollower);

                return followerRepository.save(follower);
            } throw new AlreadyExistException("The user has already follow this user");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
