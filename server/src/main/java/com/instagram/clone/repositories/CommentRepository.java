package com.instagram.clone.repositories;

import com.instagram.clone.models.Comment;
import com.instagram.clone.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentByPost(Post post);

    @Query("SELECT c.post FROM Comment c WHERE c.user.id = :userId")
    List<Post> findPostByUserId(Long userId);
}
