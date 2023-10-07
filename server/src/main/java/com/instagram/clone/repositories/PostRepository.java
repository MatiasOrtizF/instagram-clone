package com.instagram.clone.repositories;

import com.instagram.clone.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
