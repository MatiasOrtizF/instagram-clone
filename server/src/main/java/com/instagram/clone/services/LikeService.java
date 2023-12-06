package com.instagram.clone.services;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Like;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.Save;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.LikeRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService {

    private final AuthService authService;

    private final JWTUtil jwtUtil;
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public LikeService (AuthService authService, JWTUtil jwtUtil,
                        LikeRepository likeRepository,
                        PostRepository postRepository,
                        UserRepository userRepository) {
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.likeRepository = likeRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Like likePost (String token, Long id) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            if(!likeRepository.existsByPostIdAndUserId(id, Long.valueOf(userId))) {
                Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));
                User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + id + " is incorrect"));

                Like like = new Like();
                like.setUser(user);
                like.setPost(post);

                return likeRepository.save(like);
            } throw new AlreadyExistException("The user has already liked this post");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<Like> getAllLikes(String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            return likeRepository.findAll();
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Boolean likedPost(Long postId, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            if(likeRepository.existsByPostIdAndUserId(postId, Long.valueOf(userId))) {
                return true;
            } return false;
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
