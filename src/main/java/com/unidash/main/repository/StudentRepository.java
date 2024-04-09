package com.unidash.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unidash.main.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // No additional methods needed for now
}
