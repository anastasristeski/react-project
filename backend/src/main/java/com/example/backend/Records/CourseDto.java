package com.example.backend.Records;

import com.example.backend.Model.Course;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public record CourseDto(Long id,
                        String author,
                        String image,
                        String length,
                        String price,
                        String title
){
    public static CourseDto convert(Course course){
        String image = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(course.getImage())
                .toUriString();
        return new CourseDto(
                course.getId(),
                course.getAuthor(),
                image,
                course.getLength(),
                course.getPrice(),

                course.getTitle()
        );
    }
}

