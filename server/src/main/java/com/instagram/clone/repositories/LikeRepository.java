package com.instagram.clone.repositories;

import com.instagram.clone.models.Like;
import com.instagram.clone.models.Post;
import com.instagram.clone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {

    boolean existsByPostIdAndUserId(Long postId, Long userId);

    @Query("SELECT l.user FROM Like l WHERE l.post.id = :postId")
    List<User> findUsersLikedPost(Long postId);

    Like findByPostIdAndUserId(Long postId, Long userId);

    @Query("SELECT l.post FROM Like l WHERE l.user.id = :userId")
    List<Post> findPostByUserId(Long userId);
}
