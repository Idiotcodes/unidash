package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.unidash.main.model.Campus;
import com.unidash.main.model.Teacher;
import com.unidash.main.repository.CampusRepository;
import com.unidash.main.repository.TeacherRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private CampusRepository campusRepository; // Assuming you have a CampusRepository

    @GetMapping("teachers")
    public String showTeacherForm(Model model) {
        model.addAttribute("teacher", new Teacher());
        model.addAttribute("campuses", campusRepository.findAll()); // Get all campuses from the database
        return "teachers";
    }

    @PostMapping("teachers")
    public String handleTeacherSubmission(@ModelAttribute Teacher teacher, Model model, RedirectAttributes redirectAttributes) {
        try {
            teacherRepository.save(teacher); // Save the teacher to the database
            redirectAttributes.addFlashAttribute("message", "Teacher Added successfully!");
            return "redirect:/teachers";
        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("errorMessage", "Error Adding Teacher");
            return "redirect:/teachers";
        }
    }

    @GetMapping("api/teacher")
    @ResponseBody
    public List<Teacher> getTeachersApi() {
        return teacherRepository.findAll(); // Get all teachers from the database
    }

    @CrossOrigin(origins = "*")
    @GetMapping("teachers/{id}")
    public ResponseEntity<?> getTeacherById(@PathVariable Long id) {
        Optional<Teacher> teacher = teacherRepository.findById(id); // Find teacher by ID in the database
        return teacher
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
