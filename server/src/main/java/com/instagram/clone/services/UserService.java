package com.instagram.clone.services;

import com.instagram.clone.exceptions.UnauthorizedException;
import com.instagram.clone.models.User;
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

    public User addUser(User user) {
        //asegurarse que el usuario sea unico
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, user.getPassword());
        user.setPassword(hash);

        return userRepository.save(user);
    }

    public List<User> searchByUser(String word, String token) {
        if(authService.validationToken(token)) {
            return userRepository.findByWord(word);
        } throw new UnauthorizedException("Unauthorized: invalid token");
    }
}
