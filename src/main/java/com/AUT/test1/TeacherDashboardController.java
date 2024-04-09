package com.AUT.test1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class TeacherDashboardController {

    @GetMapping("/teacherdashboard")
    public String showTeacherDashboard(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("userRole") && cookie.getValue().equals("teacher")) {
                    return "teacherdashboard";
                }
            }
        }
        return "redirect:/login"; // Redirect if no valid cookie found
    }
}
