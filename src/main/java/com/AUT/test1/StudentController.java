package com.AUT.test1;

import com.AUT.test1.model.Student;
import com.AUT.test1.model.Teacher;
import com.AUT.test1.repository.StudentRepository;
import com.AUT.test1.repository.TeacherListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherListRepository teacherListRepository;

    @GetMapping("students")
    public String showStudentForm(Model model) {
        List<Teacher> teachers = teacherListRepository.findAll();
        model.addAttribute("teachers", teachers);
        model.addAttribute("student", new Student());
        return "students";
    }

    @PostMapping("students")
    public String handleStudentSubmission(@ModelAttribute Student student, Model model, RedirectAttributes redirectAttributes){
        try {
            studentRepository.save(student);
            redirectAttributes.addFlashAttribute("message", "Student Added successfully!");
            return "redirect:/students";
        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("errorMessage", "Error Adding Student");
            return "redirect:/students";
        }
    }

    // API to get all student details
    @GetMapping("/api/student")
    @ResponseBody
    public List<Student> getStudentsApi() {
        return studentRepository.findAll();
    }
}
