package com.instagram.clone.services;

import com.instagram.clone.dto.CommentDTO;
import com.instagram.clone.dto.PostDTO;
import com.instagram.clone.dto.UserDTO;
import com.instagram.clone.dto.UserPostDTO;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.LikeRepository;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.SaveRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final AuthService authService;
    private final UserRepository userRepository;
    private final ImageService imageService;
    private final LikeRepository likeRepository;
    private final SaveRepository saveRepository;

    @Autowired
    public PostService(PostRepository postRepository,
                       AuthService authService,
                       UserRepository userRepository,
                       ImageService imageService,
                       LikeRepository likeRepository,
                       SaveRepository saveRepository) {
        this.postRepository = postRepository;
        this.authService = authService;
        this.userRepository = userRepository;
        this.imageService = imageService;
        this.likeRepository = likeRepository;
        this.saveRepository = saveRepository;
    }

    public List<PostDTO> getAllPosts(String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            List<Post> posts = postRepository.findAllOrderByCreatedAtDesc();

            return posts.stream()
                    .map(post -> {
                        boolean isLiked = likeRepository.existsByPostIdAndUserId(post.getId(), userId);
                        boolean isSaved = saveRepository.existsByPostIdAndUserId(post.getId(), userId);
                        UserPostDTO userPostDTO = new UserPostDTO(post.getUser().getId(), post.getUser().getImageProfile(), post.getUser().getUserName());
                        return new PostDTO(
                                post.getId(),
                                userPostDTO,
                                post.getImage(),
                                post.getLikes(),
                                post.getContent(),
                                post.getComments(),
                                post.getCreatedAt(),
                                isLiked,
                                isSaved
                        );
                    })
                    .collect(Collectors.toList());
        } throw new UnauthorizedException();
    }

    public Post getPost(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post with this id: " + id + "is not found"));
    }

    public Map<String, Boolean> addPost(MultipartFile file, Post post, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            User user =  userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The user with this id: " + userId + "is not found"));
            LocalDate dateNow = LocalDate.now();

            if(!file.isEmpty()) {
                post.setImage(imageService.encodeImage(file));
                post.setComments(0);
                post.setLikes(0);
                post.setUser(user);
                post.setCreatedAt(dateNow);

                postRepository.save(post);

                Map<String, Boolean> response = new HashMap<>();
                response.put("post created", Boolean.TRUE);
                return response;
            } throw new IllegalArgumentException("The file is empty");
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
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException();
    }

    public Post editPost(Long id, String newContent, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post is not found"));

            if(post.getUser().getId().equals(userId)) {
                post.setContent(newContent);

                return postRepository.save(post);
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException();
    }
}
