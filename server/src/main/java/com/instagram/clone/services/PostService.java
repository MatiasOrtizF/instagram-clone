package com.instagram.clone.services;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final AuthService authService;
    private final UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository, AuthService authService, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.authService = authService;
        this.userRepository = userRepository;
    }

    public List<Post> getAllPosts(String token) {
        if(authService.validationToken(token)) {
            return postRepository.findAll();
        } throw new UnauthorizedException();
    }

    public Post getPost(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post with this id: " + id + "is not found"));
    }

    public List<Post> getAllPostByUsername(String token, String userName) {
        if(authService.validationToken(token)) {
            User user = userRepository.findByUserName(userName);
            if(user != null) {
                return postRepository.findByUserId(user.getId());
            } throw new NoSuchElementException("User does not exist");
        } throw new UnauthorizedException();
    }

    public Post addPost(Post post, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            User user =  userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The user is not found"));
            post.setUser(user);

            return postRepository.save(post);
        } throw new UnauthorizedException();
    }

    public Map<String, Boolean> deletePost(Long id, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Post post =  postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post is not found"));

            if(Objects.equals(post.getUser().getId(), userId)) {
                postRepository.delete(post);

                Map<String, Boolean> response = new HashMap<>();
                response.put("deleted", Boolean.TRUE);
                return response;
            } throw new UserMismatchException();
        } throw new UnauthorizedException();
    }

    public Post editPost(Long id, String newContent, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post is not found"));

            if(post.getUser().getId().equals(userId)) {
                post.setContent(newContent);

                return postRepository.save(post);
            } throw new UserMismatchException();
        } throw new UnauthorizedException();
    }
}
