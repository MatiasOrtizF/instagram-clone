package com.instagram.clone.services;

import com.instagram.clone.exceptions.ResourceNotFoundException;
import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.User;
import com.instagram.clone.models.UserRequest;
import com.instagram.clone.repositories.UserRepository;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final AuthService authService;

    @Autowired
    public UserService(UserRepository userRepository, AuthService authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    public User addUser(UserRequest userRequest) {
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, userRequest.getPassword());

        User newUser = new User();

        newUser.setName(userRequest.getName());
        newUser.setLastName(userRequest.getLastName());
        newUser.setEmail(userRequest.getEmail());
        newUser.setPassword(hash);
        newUser.setUserName(userRequest.getUserName());

        return userRepository.save(newUser);
    }

    public User getUserInfo(String token) {
        if(authService.validationToken(token)) {
            Long userId = authService.getUserId(token);

            return userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));
        } throw new UnauthorizedException();
    }

    public List<User> getUserByUserName(String word, String token) {
        if(authService.validationToken(token)) {
            return userRepository.findByWord(word);
        } throw new UnauthorizedException();
    }

    public User editPlayer(User user, String token) {
        if (authService.validationToken(token)) {
            Long userId = authService.getUserId(token);
            User userEdit = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("The user with this id: " + userId + " is incorrect"));

            userEdit.setName(user.getName());
            userEdit.setLastName(user.getLastName());
            userEdit.setEmail(user.getEmail());
            userEdit.setUserName(user.getUserName());
            userEdit.setDescription(user.getDescription());
            userEdit.setLink(user.getLink());

            return userRepository.save(user);

        } throw new UnauthorizedException();
    }
}
