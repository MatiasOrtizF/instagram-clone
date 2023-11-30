package com.instagram.clone.repositories;

import com.instagram.clone.models.Save;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaveRepository extends JpaRepository<Save, Long> {

    boolean existsByPostIdAndUserId(Long postId, Long userId);

}
