package com.AUT.test1.controller;

import com.AUT.test1.model.User;
import com.AUT.test1.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.Optional;

@Controller
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @PostMapping("/login")
    public String processLogin(@RequestParam String username,
                              @RequestParam String password,
                              HttpServletRequest request,
                              HttpServletResponse response,
                              RedirectAttributes redirectAttributes) {

        Optional<User> userOptional = loginRepository.findById(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                // Successful login

                // Set role-specific cookies
                if (user.getRole().equals("teacher")) {
                    response.addCookie(new Cookie("userRole", "teacher"));
                    return "redirect:/teacherdashboard";
                } else if (user.getRole().equals("student")) {
                    response.addCookie(new Cookie("userRole", "student"));
                    return "redirect:/studentdashboard";
                }
            }
        }

        // Invalid credentials
        redirectAttributes.addAttribute("error", ""); // Add error parameter
        return "redirect:/login";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        // Remove the userRole cookie
        Cookie cookie = new Cookie("userRole", "");
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
        return "redirect:/login";
    }
}
