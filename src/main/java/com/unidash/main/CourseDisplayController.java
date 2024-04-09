package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.unidash.main.model.Campus;
import com.unidash.main.model.Course;
import com.unidash.main.repository.CampusRepository;
import com.unidash.main.repository.CourseRepository;

import java.util.List;

@Controller
public class CourseDisplayController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CampusRepository campusRepository; // Add this line

    @GetMapping("coursesdisplay")
    public String displayCourses(Model model) {
        List<Course> courses = courseRepository.findAll();
        model.addAttribute("courses", courses);
        return "coursesdisplay";
    }

    @GetMapping("campus/{id}")
    @ResponseBody
    public Campus getCampusDetails(@PathVariable Long id) {
        return campusRepository.findById(id).orElse(null);
    }
}
