package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 19:37
 */
@RestController
@RequestMapping("api/list")
public class ListController {

    @GetMapping("card")
    public Object card() {
        return null;
    }

}