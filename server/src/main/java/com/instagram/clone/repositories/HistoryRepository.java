package com.instagram.clone.repositories;

import com.instagram.clone.models.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
