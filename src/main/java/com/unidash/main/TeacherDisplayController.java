package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.unidash.main.model.Teacher;
import com.unidash.main.repository.TeacherRepository;

import java.util.List;

@Controller
public class TeacherDisplayController {

    @Autowired
    private TeacherRepository teacherRepository;

    @GetMapping("teachersdisplay")
    public String displayTeachers(Model model) {
        List<Teacher> teachers = teacherRepository.findAll();
        model.addAttribute("teachers", teachers);
        return "teachersdisplay";
    }
}
