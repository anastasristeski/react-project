package com.example.backend.Controller;

import com.example.backend.Model.Course;
import com.example.backend.Model.User;
import com.example.backend.Records.CourseDto;
import com.example.backend.Repositories.CourseRepository;
import com.example.backend.Repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")

@RequestMapping("/api/courses")

public class CourseController {
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final UserController userController;

    public CourseController(CourseRepository courseRepository, UserRepository userRepository, UserController userController) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
        this.userController = userController;
    }

    @GetMapping
    public List<CourseDto> getAllCourses(){
        return courseRepository.findAll().stream().map(CourseDto::convert).collect(Collectors.toList());
    }
    @GetMapping("/paged")
    public ResponseEntity<?>getCoursesPaged(@RequestParam()int page, @RequestParam(defaultValue = "10")int size){
        Pageable pageable = PageRequest.of(page-1,size);
        Page<Course> coursePage = courseRepository.findAll(pageable);
        var coursesDto = coursePage.getContent()
                .stream()
                .map(CourseDto::convert)
                .toList();
        return ResponseEntity.ok(Map.of(
                "data", coursesDto,
                "totalPages", coursePage.getTotalPages(),
                "currentPage",page
        ));
    }
@GetMapping("/saved-courses")
public ResponseEntity<?> getSavedCourses(){

    List<Long> savedCoursesIds = userController.getCurrentUser().getSavedCourses().stream().map(Course::getId).toList();
    List<CourseDto> response = courseRepository.findAllById(savedCoursesIds).stream().map(CourseDto::convert).toList();
    return ResponseEntity.ok(response);
}
        @PostMapping("/user/save-course/{courseId}")
    public ResponseEntity<?> saveCourse(@PathVariable Long courseId){
        Course course = courseRepository.findById(courseId).orElseThrow(()->new RuntimeException("course not found"));
        User user = userController.getCurrentUser();
        user.getSavedCourses().add(course);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/user/delete-course/{courseId}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long courseId){
        Course course = courseRepository.findById(courseId).orElseThrow(()->new RuntimeException("course not found"));
        User user = userController.getCurrentUser();
        user.getSavedCourses().remove(course);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }


}

