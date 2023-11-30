package com.instagram.clone.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    private static final Long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
