package com.AUT.test1;

import com.AUT.test1.model.Teacher;
import com.AUT.test1.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
