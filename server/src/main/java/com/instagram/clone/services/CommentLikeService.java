package com.instagram.clone.services;

import com.instagram.clone.controllers.LikeController;
import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.*;
import com.instagram.clone.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
public class CommentLikeService {

    private final AuthService authService;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final CommentLikeRepository commentLikeRepository;

    @Autowired
    public CommentLikeService (AuthService authService, UserRepository userRepository, CommentRepository commentRepository, CommentLikeRepository commentLikeRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
        this.commentLikeRepository = commentLikeRepository;
    }

    @Transactional
    public Map<String, Boolean> likeComment (String token, Long commentId) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            if(!commentLikeRepository.existsByCommentIdAndUserId(commentId, userId)) {
                User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));
                Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));

                CommentLike commentLike = new CommentLike();
                commentLike.setUser(user);
                commentLike.setComment(comment);

                commentLikeRepository.save(commentLike);

                comment.setLikes(comment.getLikes()+1);

                Map<String, Boolean> response = new HashMap<>();
                response.put("liked", Boolean.TRUE);
                return response;

            } throw new AlreadyExistException("The user has already liked this comment");
        } throw new UnauthorizedException();
    }

    public Boolean likedComment(Long commentId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            return commentLikeRepository.existsByCommentIdAndUserId(commentId, userId);
        } throw new UnauthorizedException();
    }

    @Transactional
    public Map<String, Boolean> deleteLikeComment(Long commentId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            CommentLike commentLike = commentLikeRepository.findByCommentIdAndUserId(commentId, userId);
            Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));

            if(commentLike != null) {
                commentLikeRepository.delete(commentLike);

                comment.setLikes(comment.getLikes()-1);

                Map<String, Boolean> response = new HashMap<>();
                response.put("deleted", Boolean.TRUE);
                return response;
            } throw new AlreadyExistException("The user hasn't liked this post yet");
        } throw new UnauthorizedException();
    }
}
