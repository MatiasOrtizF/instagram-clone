package com.instagram.clone.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class ImageProcessingException extends RuntimeException {
    public ImageProcessingException() {
        super("Failed to encode image");
    }

    public ImageProcessingException(String message) {
        super(message);
    }
}
