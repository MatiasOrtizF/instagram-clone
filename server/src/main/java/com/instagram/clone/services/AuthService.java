package com.instagram.clone.services;

import com.instagram.clone.exceptions.InvalidCredentialsException;
import com.instagram.clone.models.LoginRequest;
import com.instagram.clone.models.LoginResponse;
import com.instagram.clone.models.User;
import com.instagram.clone.repositories.UserRepository;
import com.instagram.clone.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public AuthService(JWTUtil jwtUtil,
                       UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    public boolean validationToken (String token) {
        String userId = jwtUtil.getKey(token);
        return (userId != null);
    }

    public User validationUsername (String email) {
        return userRepository.findByEmail(email);
    }

    public LoginResponse validationCredentials (LoginRequest loginRequest) {
        User userLogged = validationUsername(loginRequest.getEmail());
        if(userLogged != null) {
            String passwordHashed = userLogged.getPassword();

            Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
            if(argon2.verify(passwordHashed, loginRequest.getPassword())) {
                userLogged.setPassword("");
                String tokenJWT = jwtUtil.create(userLogged.getId().toString(), userLogged.getEmail());

                LoginResponse response = new LoginResponse();
                response.setToken(tokenJWT);
                response.setImageProfile(userLogged.getImageProfile());

                return response;
            }
        } throw new InvalidCredentialsException("Invalid email or password");
    }

    public Long getUserId(String token) {
        String userId = jwtUtil.getKey(token);
        return Long.valueOf(userId);
    }
}
