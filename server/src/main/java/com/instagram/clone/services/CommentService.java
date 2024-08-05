package com.instagram.clone.services;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Comment;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.CommentRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final AuthService authService;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Autowired
    public CommentService (CommentRepository commentRepository, AuthService authService, PostRepository postRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.authService = authService;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Comment commentPost (Long postId, String token, String comment) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Post post = postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + postId + " is incorrect"));
            User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));

            Comment newComment = new Comment();

            newComment.setContent(comment);
            newComment.setUser(user);
            newComment.setPost(post);
            newComment.setCreatedAt(LocalDate.now());
            newComment.setLikes(0);

            post.setComments(post.getComments()+1);
            postRepository.save(post);

            return commentRepository.save(newComment);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<Comment> getAllComments(String token, Long id) {
        if(authService.validationToken(token)) {
            Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));
            return commentRepository.findCommentByPost(post);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
