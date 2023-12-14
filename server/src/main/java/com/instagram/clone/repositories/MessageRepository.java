package com.instagram.clone.repositories;

import com.instagram.clone.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MessageRepository extends JpaRepository<Message, Long>{

}
