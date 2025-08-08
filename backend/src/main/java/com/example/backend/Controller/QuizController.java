package com.example.backend.Controller;
import com.example.backend.Model.Quiz;
import com.example.backend.Model.User;
import com.example.backend.Records.QuizDto;
import com.example.backend.Repositories.QuizRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {
    private final QuizRepository quizRepository;
    private final UserRepository userRepository;

    public QuizController(QuizRepository quizRepository, UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
    }
    @GetMapping
    public List<QuizDto> getAllQuizzes(){
        return quizRepository.findAll().stream().map(QuizDto::convert).collect(Collectors.toList());
    }
    @GetMapping("/{userId}/saved-quizzes")
    public ResponseEntity<?> userSavedQuizzes(@PathVariable Long userId){
        User user = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("User does not exist"));
        List<Long> savedQuizzesIds = user.getSavedQuizzes().stream().map(Quiz::getId).toList();
        List<QuizDto> response = quizRepository.findAllById(savedQuizzesIds).stream().map(QuizDto::convert).toList();
        System.out.println(response);


        return ResponseEntity.ok(response);
    }


}
