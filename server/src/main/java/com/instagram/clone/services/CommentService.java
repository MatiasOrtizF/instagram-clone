package com.instagram.clone.services;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Comment;
import com.instagram.clone.models.Like;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.CommentRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final AuthService authService;
    private final JWTUtil jwtUtil;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService (CommentRepository commentRepository, AuthService authService, JWTUtil jwtUtil, PostRepository postRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Comment commentPost (String token, Comment comment) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
                Post post = postRepository.findById(comment.getPost().getId()).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + comment.getPost().getId() + " is incorrect"));
                User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));

                comment.setUser(user);
                comment.setPost(post);
                comment.setCreatedAt(LocalDate.now());
                comment.setLikes(0);

                return commentRepository.save(comment);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<Comment> getAllComments(String token, Long id) {
        if(authService.validationToken(token)) {
            Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));
            return commentRepository.findCommentByPost(post);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
