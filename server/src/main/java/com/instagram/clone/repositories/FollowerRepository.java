package com.instagram.clone.repositories;

import com.instagram.clone.models.Follower;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
    List<Follower> findByFollowingUser_Id(Long followingUserId);

    List<Follower> findByFollowerUser_Id(Long followerId);

    boolean existsByFollowingUser_IdAndFollowerUser_Id(Long followingUserId, Long followerUserId);

    Follower findByFollowerUser_IdAndFollowingUser_Id(Long followerId, Long followingId);
}
