package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 16:03
 */
@RestController
@RequestMapping("api/auth")
public class AuthController {

    @PostMapping("2step-code")
    public Object towStepCode() {
        return null;
    }

    @PostMapping("login")
    public Object login() {
        return null;
    }

    @PostMapping("logout")
    public Object logout() {
        return null;
    }

}
