package com.instagram.clone.services;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.Save;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.PostRepository;
import com.instagram.clone.repositories.SaveRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaveService {

    private final SaveRepository saveRepository;
    private final AuthService authService;
    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Autowired
    public SaveService (SaveRepository saveRepository, AuthService authService, JWTUtil jwtUtil,
                        UserRepository userRepository,
                        PostRepository postRepository) {
        this.saveRepository = saveRepository;
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public Save savePost (String token, Long id) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            if(!saveRepository.existsByPostIdAndUserId(id, Long.valueOf(userId))) {
                Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));
                User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + id + " is incorrect"));

                Save save = new Save();
                save.setUser(user);
                save.setPost(post);

                return saveRepository.save(save);
            } throw new AlreadyExistException("The user has already saved this post");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<Save> getAllSave(String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            return saveRepository.findAll();
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public Boolean savedPost(Long postId, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            if(saveRepository.existsByPostIdAndUserId(postId, Long.valueOf(userId))) {
                return true;
            } return false;
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public boolean unSavePost(Long id, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + id + " is incorrect"));
            Post post = postRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));

            Save save = saveRepository.findByUserAndPost(user, post);
            if(save.getUser().getId().equals(Long.valueOf(userId))) {
                saveRepository.delete(save);
                return true;
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

}
