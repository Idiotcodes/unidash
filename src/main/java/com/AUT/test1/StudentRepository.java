package com.AUT.test1.repository;

import com.AUT.test1.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // No additional methods needed for now
}
