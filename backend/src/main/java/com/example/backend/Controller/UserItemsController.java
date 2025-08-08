package com.example.backend.Controller;

import com.example.backend.Model.Course;
import com.example.backend.Model.Quiz;
import com.example.backend.Model.User;
import com.example.backend.Repositories.CourseRepository;
import com.example.backend.Repositories.QuizRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users/user-items")
public class UserItemsController {
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final QuizRepository quizRepository;

    public UserItemsController(UserRepository userRepository, CourseRepository courseRepository, QuizRepository quizRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
        this.quizRepository = quizRepository;
    }
    @PostMapping("courses/{userId}/{courseId}")
    public ResponseEntity<?> saveCourse(@PathVariable Long userId, @PathVariable Long courseId){
        User user = userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(()->new RuntimeException("course not found"));

        user.getSavedCourses().add(course);
        userRepository.save(user);

        return ResponseEntity.ok().build();
    }
    @PostMapping("quizzes/{userId}/{quizId}")
    public ResponseEntity<?> saveQuiz(@PathVariable Long userId, @PathVariable Long quizId){
        User user = userRepository.findById(userId).orElseThrow(()->new RuntimeException("user not found"));
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(()->new RuntimeException("quiz not found"));

        user.getSavedQuizzes().add(quiz);
        userRepository.save(user);

        return ResponseEntity.ok().build();
    }
    @DeleteMapping("courses/{userId}/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long userId, @PathVariable Long courseId){
        User user = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(()-> new RuntimeException("course not found"));
        user.getSavedCourses().remove(course);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }
    @DeleteMapping("quizzes/{userId}/{quizId}")
    public ResponseEntity<?> deleteQuiz(@PathVariable Long userId, @PathVariable Long quizId){
        User user = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(()-> new RuntimeException("quiz not found"));
        user.getSavedQuizzes().remove(quiz);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }
}
