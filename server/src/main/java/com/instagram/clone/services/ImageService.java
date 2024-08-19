package com.instagram.clone.services;

import com.instagram.clone.exceptions.ImageProcessingException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
public class ImageService {

    public String encodeImage(MultipartFile file) {
        try {
            return Base64.getEncoder().encodeToString(file.getBytes());
        } catch (IOException e) {
            throw new ImageProcessingException();
        }
    }
}
