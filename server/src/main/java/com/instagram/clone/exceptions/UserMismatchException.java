package com.instagram.clone.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class UserMismatchException extends RuntimeException {
    public UserMismatchException() {
        super("User mismatch: You do not have permission to edit this post");
    }

    public UserMismatchException(String message) {
        super(message);
    }
}
