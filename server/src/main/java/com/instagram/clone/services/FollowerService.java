package com.instagram.clone.services;

import com.instagram.clone.dto.UserDTO;
import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Follower;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.FollowerRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    public List<UserDTO> getAllFollowers(Long userId, String token) {
        if(authService.validationToken(token)) {
            List<Follower> users = followerRepository.findByFollowingUser_Id(userId);

            return users.stream()
                    .map(follower -> new UserDTO(follower.getFollowerUser().getId(), follower.getFollowerUser().getImageProfile(), follower.getFollowerUser().getUserName(), follower.getFollowerUser().getName(), follower.getFollowerUser().getLastName(), follower.getFollowerUser().getVerified()))
                    .collect(Collectors.toList());

        } throw new UnauthorizedException();
    }

    @Transactional
    public Map<String, Boolean> addFollow(Long followingUserId, String token) {
        if(authService.validationToken(token)) {
            Long followerUserId = authService.getUserId(token);
            if(!followerRepository.existsByFollowingUser_IdAndFollowerUser_Id(followingUserId, followerUserId)) {
                User userFollowing = userRepository.findById(followingUserId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + followingUserId + " is incorrect"));
                User userFollower = userRepository.findById(followerUserId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + followerUserId + " is incorrect"));

                Follower follower = new Follower();
                follower.setFollowingUser(userFollowing);
                follower.setFollowerUser(userFollower);

                followerRepository.save(follower);

                userFollowing.setNumberFollowers(userFollowing.getNumberFollowers()+1);
                userFollower.setNumberFollowing(userFollower.getNumberFollowing()+1);

                Map<String, Boolean> response = new HashMap<>();
                response.put("following", Boolean.TRUE);
                return response;

            } throw new AlreadyExistException("The user has already follow this user");
        } throw new UnauthorizedException();
    }

    @Transactional
    public Map<String, Boolean> deleteFollow(Long followingUserId, String token) {
        if(authService.validationToken(token)) {
            Long followerUserId = authService.getUserId(token);
            Follower follower = followerRepository.findByFollowerUser_IdAndFollowingUser_Id(followerUserId, followingUserId);

            User userFollowing = userRepository.findById(followingUserId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + followingUserId + " is incorrect"));
            User userFollower = userRepository.findById(followerUserId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + followerUserId + " is incorrect"));

            followerRepository.delete(follower);

            userFollowing.setNumberFollowers(userFollowing.getNumberFollowers()-1);
            userFollower.setNumberFollowing(userFollower.getNumberFollowing()-1);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
        } throw new UnauthorizedException();
    }

    public Map<String, Boolean> getFollowerUser(Long userId, String token) {
        if(authService.validationToken(token)) {
            Long followerUserId = authService.getUserId(token);

            Boolean existsFollower =  followerRepository.existsByFollowingUser_IdAndFollowerUser_Id(userId, followerUserId);

                Map<String, Boolean> response = new HashMap<>();
                response.put("followed", existsFollower);
                return response;
        } throw new UnauthorizedException();
    }

}
