package com.instagram.clone.services;

import com.instagram.clone.dto.CommentDTO;
import com.instagram.clone.dto.PostProfileDTO;
import com.instagram.clone.dto.UserDTO;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Comment;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.CommentLikeRepository;
import com.instagram.clone.repositories.CommentRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final AuthService authService;
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final CommentLikeRepository commentLikeRepository;

    @Autowired
    public CommentService (CommentRepository commentRepository,
                           AuthService authService,
                           PostRepository postRepository,
                           UserRepository userRepository,
                           CommentLikeRepository commentLikeRepository) {
        this.commentRepository = commentRepository;
        this.authService = authService;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.commentLikeRepository = commentLikeRepository;
    }

    @Transactional
    public Comment commentPost(Long postId, String token, String comment) {
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

            return commentRepository.save(newComment);
        } throw new UnauthorizedException();
    }

    public List<CommentDTO> getAllComments(Long id, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));

            List<Comment> comments = commentRepository.findCommentByPost(post);

            return comments.stream()
                    .map(comment -> {
                        boolean isLiked = commentLikeRepository.existsByCommentIdAndUserId(comment.getId(), userId);
                        UserDTO userDTO = new UserDTO(comment.getUser().getId(), comment.getUser().getImageProfile(),  comment.getUser().getUserName(), comment.getUser().getName(), comment.getUser().getLastName(), comment.getUser().getVerified(), false);
                        return new CommentDTO(
                                comment.getId(),
                                userDTO,
                                comment.getContent(),
                                comment.getCreatedAt(),
                                comment.getLikes(),
                                isLiked
                        );
                    })
                    .collect(Collectors.toList());
        } throw new UnauthorizedException();
    }

    public List<PostProfileDTO> getAllMyComments(String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            List<Post> posts = commentRepository.findPostByUserId(userId);

            return posts.stream()
                    .map(post -> new PostProfileDTO(post.getId(), post.getImage()))
                    .collect(Collectors.toList());

        } throw new UnauthorizedException();
    }

    @Transactional
    public Map<String, Boolean> deleteComment(Long commentId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));
            Long postId = comment.getPost().getId();
            Post post = postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));

            if(comment.getUser().getId().equals(userId)) {
                commentRepository.delete(comment);

                post.setComments(post.getComments()-1);

                Map<String, Boolean> response = new HashMap<>();
                response.put("deleted comment", Boolean.TRUE);
                return response;
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException();
    }

    // like comment
    public Map<String, Boolean> likeCommentPost(Long commentId, String token) {
        if(authService.validationToken(token)) {
            Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));

            comment.setLikes(comment.getLikes()+1);

            Map<String, Boolean> response = new HashMap<>();
            response.put("liked", Boolean.TRUE);
            return response;
        } throw new UnauthorizedException();
    }

    public Map<String, Boolean> deleteLikeCommentPost(Long commentId, String token) {
        if(authService.validationToken(token)) {
            Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("The comment with this id: " + commentId + " is incorrect"));

            comment.setLikes(comment.getLikes()-1);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted like", Boolean.TRUE);
            return response;
        } throw new UnauthorizedException();
    }
}
