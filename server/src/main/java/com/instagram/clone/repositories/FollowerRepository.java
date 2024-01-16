package com.instagram.clone.repositories;

import com.instagram.clone.models.Follower;
import com.instagram.clone.models.History;
import com.instagram.clone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
    List<Follower> findByFollowingUser_Id(Long followingUserId);

    boolean existsByFollowingUser_IdAndFollowerUser_Id(Long followingUserId, Long followerUserId);
}
