package com.example.backend.Records;

import com.example.backend.Model.Course;
import com.example.backend.Model.Quiz;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public record QuizDto(Long id, String author, String image, String length, String title) {
    public static QuizDto convert(Quiz quiz){
        String image = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(quiz.getImage())
                .toUriString();
        return new QuizDto(
                quiz.getId(),
                quiz.getAuthor(),
                image,
                quiz.getLength(),
                quiz.getTitle()
        );
    }
}
