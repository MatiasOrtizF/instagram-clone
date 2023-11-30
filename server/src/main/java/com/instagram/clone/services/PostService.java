package com.instagram.clone.services;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final AuthService authService;
    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository, AuthService authService, JWTUtil jwtUtil, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    public List<Post> getAllPosts(String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            return postRepository.findAll();
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Post getPost(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post with this id: " + id + "is not found"));
    }

    public Post addPost(Post post, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            User user =  userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new ResourceNotFoundException("The user is not found"));
            post.setUser(user);

            return postRepository.save(post);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public boolean deletePost(Long id, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            Post post =  postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post is not found"));

            if(post.getUser().getId() == Long.valueOf(userId)) {
                postRepository.delete(post);
                return true;
            } throw new UnauthorizedException("Unauthorized: You do not have permission to delete this post");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Post editPost(Long id, String newContent, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post is not found"));
            if(post.getUser().getId().equals(userId)) {
                post.setContent(newContent);
                return postRepository.save(post);
            } throw new UserMismatchException("User mismatch: You do not have permission to edit this post");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
