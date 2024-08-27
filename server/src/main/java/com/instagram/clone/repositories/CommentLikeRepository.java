package com.instagram.clone.repositories;

import com.instagram.clone.models.CommentLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentLikeRepository extends JpaRepository<CommentLike, Long> {
    boolean existsByCommentIdAndUserId(Long commentId, Long userId);
    CommentLike findByCommentIdAndUserId(Long commentId, Long userId);
}
