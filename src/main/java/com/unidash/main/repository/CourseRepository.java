package com.unidash.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unidash.main.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // No additional methods needed for now
}
