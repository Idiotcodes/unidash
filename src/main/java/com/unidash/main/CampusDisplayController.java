package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.unidash.main.model.Campus;
import com.unidash.main.repository.CampusRepository;

import java.util.List;

@Controller
public class CampusDisplayController {

    @Autowired
    private CampusRepository campusRepository;

    @GetMapping("campusesdisplay")
    public String displayCampuses(Model model) {
        List<Campus> campuses = campusRepository.findAll();
        model.addAttribute("campuses", campuses);
        return "campusesdisplay";
    }
}
