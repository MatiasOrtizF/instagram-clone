package com.instagram.clone.repositories;

import com.instagram.clone.models.History;
import com.instagram.clone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History, Long> {

    List<History> findBySearchingUser_Id(Long searchingUserId);
    boolean existsBySearchingUserAndSearchedUser(User searchingUser, User searchedUser);

    History findBySearchingUserAndSearchedUser(User searchingUser, User searchedUser);

}
