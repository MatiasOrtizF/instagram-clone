package com.instagram.clone.exceptions;

public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException() {
        super("Unauthorized: invalid token");
    }

    public UnauthorizedException(String message) {
        super(message);
    }
}
