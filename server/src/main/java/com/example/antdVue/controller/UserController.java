package com.example.antdVue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 16:45
 */
@RestController
@RequestMapping("api/user")
public class UserController {

    @GetMapping("info")
    public Object info() {
        Map map = new HashMap();
        Map resultMap = new HashMap();
        Map roleMap = new HashMap();
        roleMap.put("permissions", new int[]{1, 2, 3});
        resultMap.put("role", roleMap);
        map.put("result", resultMap);
        return map;
    }

}