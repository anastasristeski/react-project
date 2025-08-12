package com.example.backend.Repositories;

import com.example.backend.Model.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
Page<Course> findByTitleContainingIgnoreCase(String title, Pageable pageable);
}
