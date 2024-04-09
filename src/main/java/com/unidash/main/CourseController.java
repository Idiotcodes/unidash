package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.unidash.main.model.Campus;
import com.unidash.main.model.Course;
import com.unidash.main.repository.CampusRepository;
import com.unidash.main.repository.CourseRepository;

import java.util.List;

@Controller
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private CampusRepository campusRepository;

    // Displaying courses.html along with a table displaying campus details from the database
    @GetMapping("courses")
    public String showCourseForm(Model model) {
        List<Campus> campuses = campusRepository.findAll();
        model.addAttribute("campuses", campuses);
        model.addAttribute("course", new Course());
        return "courses"; // thymleaf template
    }

    // To add a new course
    @PostMapping("courses")
    public String handleCourseSubmission(@ModelAttribute Course course, Model model, RedirectAttributes redirectAttributes) {
        try {
            courseRepository.save(course);
            redirectAttributes.addFlashAttribute("message", "Course Added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("errorMessage", "Error Adding Course");
        }
        return "redirect:/courses";
    }

    // API to get all course details
    @CrossOrigin(origins = "*") // Allow Test3 to make requests
    @GetMapping("/api/course")
    @ResponseBody
    public List<Course> getCoursesApi() {
        return courseRepository.findAll();
    }
}
