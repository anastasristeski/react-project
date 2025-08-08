package com.example.backend.Repositories;

import com.example.backend.Model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuizRepository  extends JpaRepository<Quiz, Long> {

}
