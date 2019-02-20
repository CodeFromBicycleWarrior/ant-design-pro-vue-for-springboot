package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 19:38
 */
@RestController
@RequestMapping("api/workplace")
public class WorkplaceController {

    @GetMapping("activity")
    public Object activity() {
        return null;
    }

    @GetMapping("radar")
    public Object radar() {
        return null;
    }

    @GetMapping("teams")
    public Object teams() {
        return null;
    }

}