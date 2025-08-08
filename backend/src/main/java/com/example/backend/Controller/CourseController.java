package com.example.backend.Controller;

import com.example.backend.Model.Course;
import com.example.backend.Model.Quiz;
import com.example.backend.Model.User;
import com.example.backend.Records.CourseDto;
import com.example.backend.Records.QuizDto;
import com.example.backend.Repositories.CourseRepository;
import com.example.backend.Repositories.QuizRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

@RequestMapping("/api/courses")

public class CourseController {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final QuizRepository quizRepository;

    public CourseController(CourseRepository courseRepository, UserRepository userRepository, QuizRepository quizRepository) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
        this.quizRepository = quizRepository;
    }
    @GetMapping
    public List<CourseDto> getAllCourses(){
        return courseRepository.findAll().stream().map(CourseDto::convert).collect(Collectors.toList());
    }

    @GetMapping("/{userId}/saved-courses")
    public ResponseEntity<?> getSavedCourses(@PathVariable Long userId){
        User user = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("User does not exist"));
        List<Long> savedCoursesIds = user.getSavedCourses().stream().map(Course::getId).toList();
        List<CourseDto> response = courseRepository.findAllById(savedCoursesIds).stream().map(CourseDto::convert).toList();
        return ResponseEntity.ok(response);
    }
    @DeleteMapping("/{userId}/saved-courses/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long userId, @PathVariable Long courseId){
        User user = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
        Course course = courseRepository.findById(courseId).orElseThrow(()-> new RuntimeException("course not found"));
        user.getSavedCourses().remove(course);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }


}

