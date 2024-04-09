package com.AUT.test1;

import com.AUT.test1.model.Campus;
import com.AUT.test1.model.Course;
import com.AUT.test1.repository.CampusRepository;
import com.AUT.test1.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

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
