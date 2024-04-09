package com.unidash.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class StudentDashboardController {

    @GetMapping("/studentdashboard")
    public String showStudentDashboard(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("userRole") && cookie.getValue().equals("student")) {
                    return "studentdashboard";
                }
            }
        }
        return "redirect:/login"; // Redirect if no valid cookie found
    }
}
