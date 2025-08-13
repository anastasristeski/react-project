package com.example.backend.Controller;
import com.example.backend.Model.Course;
import com.example.backend.Model.Quiz;
import com.example.backend.Model.User;
import com.example.backend.Records.CourseDto;
import com.example.backend.Records.QuizDto;
import com.example.backend.Repositories.QuizRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/quizzes")
public class QuizController {
    private final QuizRepository quizRepository;
    private final UserRepository userRepository;

    public QuizController(QuizRepository quizRepository, UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
    }
    User getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserEmail = authentication.getName();
        return userRepository.findByEmail(currentUserEmail).orElseThrow(()->new RuntimeException("User not found"));
    }
    @GetMapping
    public List<QuizDto> getAllQuizzes(){
        return quizRepository.findAll().stream().map(QuizDto::convert).collect(Collectors.toList());
    }
    @GetMapping("/paged")
    public ResponseEntity<?>getQuizzesPaged(@RequestParam()int page, @RequestParam(defaultValue = "10")int size){
        Pageable pageable = PageRequest.of(page-1,size);
        Page<Quiz> quizPage = quizRepository.findAll(pageable);
        var quizDto = quizPage.getContent()
                .stream()
                .map(QuizDto::convert)
                .toList();
        return ResponseEntity.ok(Map.of(
                "data", quizDto,
                "totalPages", quizPage.getTotalPages(),
                "currentPage",page
        ));
    }
    @GetMapping("/saved-quizzes")
    public ResponseEntity<?> getSavedCourses(){
        List<Long> savedQuizzesIds = getCurrentUser().getSavedQuizzes().stream().map(Quiz::getId).toList();
        List<QuizDto> response = quizRepository.findAllById(savedQuizzesIds).stream().map(QuizDto::convert).toList();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/save-quiz/{quizId}")
    public ResponseEntity<?> saveQuiz(@PathVariable Long quizId){
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(()->new RuntimeException("quiz not found"));
        User user = getCurrentUser();
        user.getSavedQuizzes().add(quiz);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/user/delete-quiz/{quizId}")
    public ResponseEntity<?> deleteQuiz(@PathVariable Long quizId){
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(()->new RuntimeException("quiz not found"));
        User user = getCurrentUser();
        user.getSavedQuizzes().remove(quiz);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

}
