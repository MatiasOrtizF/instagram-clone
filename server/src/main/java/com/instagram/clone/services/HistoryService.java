package com.instagram.clone.services;

import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.History;
import com.instagram.clone.models.Like;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.HistoryRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {

    private final HistoryRepository historyRepository;
    private final AuthService authService;
    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public HistoryService(HistoryRepository historyRepository, AuthService authService, JWTUtil jwtUtil, UserRepository userRepository) {
        this.historyRepository = historyRepository;
        this.authService = authService;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    public History addHistory (Long id, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
                User searchedUser = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The post with this id: " + id + " is incorrect"));
                User searchingUser = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new ResourceNotFoundException("The post with this id: " + userId + " is incorrect"));
            if(!historyRepository.existsBySearchingUserAndSearchedUser(searchingUser, searchedUser)) {
                History history = new History();
                history.setSearchedUser(searchedUser);
                history.setSearchingUser(searchingUser);

                return historyRepository.save(history);
            } throw new AlreadyExistException("The user has already searched this user");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public List<History> getHistory (String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            return historyRepository.findBySearchingUser_Id(Long.valueOf(userId));
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }

    public boolean deleteHistory(Long id, String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            User searchedUser = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The user with this id: " + id + " is incorrect"));
            User searchingUser = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));

            History history = historyRepository.findBySearchingUserAndSearchedUser(searchingUser, searchedUser);
            if(history.getSearchingUser().getId().equals(Long.valueOf(userId))) {
                historyRepository.delete(history);
                return true;
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
