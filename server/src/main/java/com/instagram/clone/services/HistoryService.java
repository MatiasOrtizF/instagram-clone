package com.instagram.clone.services;

import com.instagram.clone.dto.UserHistoryDTO;
import com.instagram.clone.exceptions.AlreadyExistException;
import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.exceptions.UserMismatchException;
import com.instagram.clone.models.History;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.HistoryRepository;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    public Map<String, Boolean> addHistory(Long userSearchedId, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
                User searchedUser = userRepository.findById(userSearchedId).orElseThrow(() -> new ResourceNotFoundException("The user with this id: " + userSearchedId + " is incorrect"));
                User searchingUser = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));
            if(!historyRepository.existsBySearchingUserAndSearchedUser(searchingUser, searchedUser)) {

                History history = new History();
                history.setSearchedUser(searchedUser);
                history.setSearchingUser(searchingUser);

                historyRepository.save(history);

                Map<String, Boolean> response = new HashMap<>();
                response.put("searched", Boolean.TRUE);
                return response;
            } throw new AlreadyExistException("The user has already searched this user");
        } throw new UnauthorizedException();
    }

    public List<UserHistoryDTO> getHistory(String token) {
        if(authService.validationToken(token)) {
            String userId = jwtUtil.getKey(token);
            List<History> histories = historyRepository.findBySearchingUser_Id(Long.valueOf(userId));

            return histories.stream()
                    .map(history -> new UserHistoryDTO(history.getId(), history.getSearchedUser().getId(), history.getSearchedUser().getImageProfile(), history.getSearchedUser().getUserName(), history.getSearchedUser().getName(), history.getSearchedUser().getLastName(), history.getSearchedUser().getVerified()))
                    .collect(Collectors.toList());
        } throw new UnauthorizedException();
    }

    public Map<String, Boolean> deleteHistory(Long id, String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            History history = historyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The history with this id: " + id + " is incorrect"));
            if(history.getSearchingUser().getId().equals(userId)) {
                historyRepository.delete(history);

                Map<String, Boolean> response = new HashMap<>();
                response.put("deleted", Boolean.TRUE);
                return response;
            } throw new UserMismatchException("User mismatch");
        } throw new UnauthorizedException();
    }
}
