package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 19:36
 */
@RestController
@RequestMapping("api/account")
public class AccountController {

    @PostMapping("sms")
    public Object sms() {
        return null;
    }

}