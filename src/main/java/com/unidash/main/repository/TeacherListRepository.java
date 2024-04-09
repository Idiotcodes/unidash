package com.unidash.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unidash.main.model.Teacher;

public interface TeacherListRepository extends JpaRepository<Teacher, Long> {
    // No additional methods needed for now
}
