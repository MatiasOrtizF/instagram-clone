package com.instagram.clone.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AlreadyExistException extends RuntimeException{
    private static final Long serialVersionUID = 1L;

    public AlreadyExistException(String message) {
        super(message);
    }
}
