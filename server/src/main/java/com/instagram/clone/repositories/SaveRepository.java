package com.instagram.clone.repositories;

import com.instagram.clone.models.Post;
import com.instagram.clone.models.Save;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaveRepository extends JpaRepository<Save, Long> {

    boolean existsByPostIdAndUserId(Long postId, Long userId);

    Save findByPostIdAndUserId(Long postId, Long userId);

    @Query("SELECT s.post FROM Save s WHERE s.user.id = :userId")
    List<Post> findPostByUserId(Long userId);
}
