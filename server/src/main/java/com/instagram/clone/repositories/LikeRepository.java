package com.instagram.clone.repositories;

import com.instagram.clone.models.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {

    boolean existsByPostIdAndUserId(Long postId, Long userId);
}
