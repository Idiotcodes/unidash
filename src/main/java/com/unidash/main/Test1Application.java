package com.unidash.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class Test1Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Test1Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Test1Application.class, args);
    }

}




/*
 * package com.AUT.test1;
 * 
 * import org.springframework.boot.SpringApplication; import
 * org.springframework.boot.autoconfigure.SpringBootApplication;
 * 
 * @SpringBootApplication public class Test1Application {
 * 
 * public static void main(String[] args) {
 * SpringApplication.run(Test1Application.class, args); }
 * 
 * }
 */