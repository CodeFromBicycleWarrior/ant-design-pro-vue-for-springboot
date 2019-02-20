package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 19:39
 */
@RestController
@RequestMapping("api")
public class DefaultController {

    @GetMapping("permission")
    public Object permission() {
        return null;
    }

    @GetMapping("role")
    public Object role() {
        return null;
    }

    @GetMapping("service")
    public Object service() {
        return null;
    }

    @GetMapping("user")
    public Object user() {
        return null;
    }

}