package com.instagram.clone.services;

import com.instagram.clone.dto.PostDTO;
import com.instagram.clone.dto.UserDTO;
import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.*;
import com.instagram.clone.repositories.LikeRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class LikeService {

    private final AuthService authService;
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public LikeService (AuthService authService,
                        LikeRepository likeRepository,
                        PostRepository postRepository,
                        UserRepository userRepository) {
        this.authService = authService;
        this.likeRepository = likeRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public Map<String, Boolean> likePost (String token, Long postId) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            if(!likeRepository.existsByPostIdAndUserId(postId, userId)) {
                User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));
                Post post = postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + postId + " is incorrect"));

                Like like = new Like();
                like.setUser(user);
                like.setPost(post);

                likeRepository.save(like);

                post.setLikes(post.getLikes()+1);

                Map<String, Boolean> response = new HashMap<>();
                response.put("liked", Boolean.TRUE);
                return response;

            } throw new AlreadyExistException("The user has already liked this post");
        } throw new UnauthorizedException();
    }

    public List<UserDTO> getUsersLikedPost(Long postId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            List<User> users = likeRepository.findUsersLikedPost(postId);

            List<User> newUsers =  users.stream()
                    .filter(user -> !user.getId().equals(userId))
                    .toList();

            return newUsers.stream()
                    .map(user -> new UserDTO(user.getId(), user.getImageProfile(), user.getUserName(), user.getName(), user.getLastName(), user.getVerified()))
                    .collect(Collectors.toList());

        } throw new UnauthorizedException();
    }

    public List<PostDTO> getAllLikes(String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            List<Post> posts = likeRepository.findPostByUserId(userId);

            return posts.stream()
                    .map(post -> new PostDTO(post.getId(), post.getImage()))
                    .collect(Collectors.toList());

        } throw new UnauthorizedException();
    }

    public Boolean likedPost(Long postId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            return likeRepository.existsByPostIdAndUserId(postId, userId);
        } throw new UnauthorizedException();
    }

    @Transactional
    public Map<String, Boolean> deleteLikePost(Long postId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Like like = likeRepository.findByPostIdAndUserId(postId, userId);
            Post post = postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + postId + " is incorrect"));

            likeRepository.delete(like);

            post.setLikes(post.getLikes()-1);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
        } throw new UnauthorizedException();
    }
}