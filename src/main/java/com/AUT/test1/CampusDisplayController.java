package com.AUT.test1;

import com.AUT.test1.model.Campus;
import com.AUT.test1.repository.CampusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
