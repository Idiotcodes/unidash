package com.AUT.test1.repository;

import com.AUT.test1.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherListRepository extends JpaRepository<Teacher, Long> {
    // No additional methods needed for now
}
