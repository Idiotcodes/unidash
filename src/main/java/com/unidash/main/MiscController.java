package com.unidash.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MiscController {

    @GetMapping("about")
    public String showAbout() {
        return "about";
    }

    @GetMapping("blog")
    public String showBlog() {
        return "blog";
    }
    @GetMapping("contact")
    public String showContact() {
        return "contact";
    }
    @GetMapping("index")
    public String showIndex() {
        return "index";
    }
    @GetMapping("course")
    public String showCourse() {
        return "course";
    }

}
