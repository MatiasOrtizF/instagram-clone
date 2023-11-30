package com.instagram.clone.exceptions;

public class UnauthorizedException extends RuntimeException {
    private static final Long serialVersionUID = 1L;

    public UnauthorizedException(String message) {
        super(message);
    }
}
