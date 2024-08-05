package com.instagram.clone.services;

import com.instagram.clone.dto.PostDTO;
import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.Save;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.SaveRepository;
import com.instagram.clone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SaveService {

    private final SaveRepository saveRepository;
    private final AuthService authService;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Autowired
    public SaveService (SaveRepository saveRepository, AuthService authService,
                        UserRepository userRepository,
                        PostRepository postRepository) {
        this.saveRepository = saveRepository;
        this.authService = authService;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    @Transactional
    public Map<String, Boolean> savePost (String token, Long postId) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            if(!saveRepository.existsByPostIdAndUserId(postId, userId)) {
                User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + postId + " is incorrect"));
                Post post = postRepository.findById(postId).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + postId + " is incorrect"));

                Save save = new Save();
                save.setUser(user);
                save.setPost(post);

                saveRepository.save(save);

                Map<String, Boolean> response = new HashMap<>();
                response.put("saved", Boolean.TRUE);
                return response;

            } throw new AlreadyExistException("The user has already saved this post");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<PostDTO> getAllSave(String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            List<Post> posts = saveRepository.findPostByUserId(userId);

            return posts.stream()
                    .map(post -> new PostDTO(post.getId(), post.getImage()))
                    .collect(Collectors.toList());

        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Boolean savedPost(Long postId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            return saveRepository.existsByPostIdAndUserId(postId, userId);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Map<String, Boolean> unSavePost(Long postId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            Save save = saveRepository.findByPostIdAndUserId(postId, userId);

            saveRepository.delete(save);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}