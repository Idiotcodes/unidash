package com.AUT.test1.repository;

import com.AUT.test1.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // No additional methods needed for now
}
