package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.unidash.main.model.Campus;
import com.unidash.main.repository.CampusRepository;

import java.util.List;
import java.util.Optional;

@Controller
public class CampusesController {

    @Autowired
    private CampusRepository campusRepository;

    @GetMapping("campuses")
    public String showCampusForm(Model model) {
        model.addAttribute("campus", new Campus());
        return "campuses";
    }

    @PostMapping("campuses")
    public String handleCampusSubmission(@ModelAttribute Campus campus, Model model, RedirectAttributes redirectAttributes) {
        try {
            campusRepository.save(campus);
            redirectAttributes.addFlashAttribute("message", "Campus Added successfully!");
        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("errorMessage", "Error Adding Campus");
        }
        return "redirect:/campuses";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/campuses/{id}")
    public ResponseEntity<?> getCampusById(@PathVariable Long id) {
        Optional<Campus> campus = campusRepository.findById(id);
        return campus.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/campus")
    @ResponseBody
    public List<Campus> getCampusesApi() {
        return campusRepository.findAll();
    }
}
