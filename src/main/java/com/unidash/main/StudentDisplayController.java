package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.unidash.main.model.Student;
import com.unidash.main.repository.StudentRepository;

import java.util.List;

@Controller
public class StudentDisplayController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("studentsdisplay")
    public String displayStudents(Model model) {
        List<Student> students = studentRepository.findAll();
        model.addAttribute("students", students);
        return "studentsdisplay";
    }


}
