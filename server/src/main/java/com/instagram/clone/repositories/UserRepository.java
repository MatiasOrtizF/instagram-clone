package com.instagram.clone.repositories;

import com.instagram.clone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u from User u WHERE u.email = :email")
    User findByEmail(@Param("email")String email);

    User findByUserName(String userName);

    @Query("SELECT u FROM User u WHERE LOWER(u.userName) LIKE LOWER(CONCAT('%', :word, '%'))")
    List<User> findByWord(String word);
}
