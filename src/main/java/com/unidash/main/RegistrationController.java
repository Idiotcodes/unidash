package com.unidash.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.unidash.main.model.User;
import com.unidash.main.repository.RegistrationRepository;

@Controller
public class RegistrationController {

    @Autowired
    private RegistrationRepository registrationRepository;

    @GetMapping("/registration")
    public String showRegistrationForm() {
        return "registration";
    }

    @PostMapping("/registration")
    public String processRegistration(@RequestParam String username,
                                      @RequestParam String password,
                                      @RequestParam String role,
                                      RedirectAttributes redirectAttributes) {

        User user = new User(username, password, role);
        registrationRepository.save(user);

        redirectAttributes.addAttribute("success", "true"); // Pass success message
        return "redirect:/registration"; // Redirect to avoid form resubmission
    }
}
