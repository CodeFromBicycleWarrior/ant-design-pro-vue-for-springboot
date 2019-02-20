package com.example.antdVue.aspect;

import com.google.gson.Gson;
import org.apache.commons.io.FileUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.nio.charset.Charset;
import java.util.HashMap;

/**
 * @Author: liufeng24
 * @Description:
 * @Date: Created in 2019/2/19 17:23
 */
@Aspect
@Configuration
public class MockDataAspect {

    private static final boolean isMock = true;

    @Pointcut("execution(* com.example.antdVue.controller.*Controller.*(..))")
//    @Pointcut("@annotation(org.springframework.web.bind.annotation.GetMapping)")
    public void mockDataPointCut() {
    }

    @Around("mockDataPointCut()")
    public Object around(ProceedingJoinPoint point) throws Throwable {

        String[] targetValues = point.getTarget().getClass().getAnnotation(RequestMapping.class).value();

        Object[] args = point.getArgs();
        Class<?>[] argTypes = new Class[point.getArgs().length];
        for (int i = 0; i < args.length; i++) {
            argTypes[i] = args[i].getClass();
        }
        Method method = null;
        try {
            method = point.getTarget().getClass()
                    .getMethod(point.getSignature().getName(), argTypes);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (SecurityException e) {
            e.printStackTrace();
        }

        Object result = null;
        String[] methodValues = null;
        if (method.isAnnotationPresent(GetMapping.class)) {
            methodValues = method.getAnnotation(GetMapping.class).value();
        } else if (method.isAnnotationPresent(PostMapping.class)) {
            methodValues = method.getAnnotation(PostMapping.class).value();
        }

        if (targetValues != null && methodValues != null && isMock) {
            String[] values = new String[targetValues.length * methodValues.length];
            int i = 0;
            for (String targetValue : targetValues) {
                for (String methodValue : methodValues) {
                    if (targetValue.startsWith("/")) {
                        targetValue = targetValue.substring(0);
                    }
                    if (targetValue.endsWith("/")) {
                        targetValue = targetValue.substring(0, targetValue.length());
                    }
                    if (methodValue.startsWith("/")) {
                        methodValue = methodValue.substring(0);
                    }
                    if (methodValue.endsWith("/")) {
                        methodValue = methodValue.substring(0, methodValue.length());
                    }
                    values[i] = targetValue + "/" + methodValue;
                    i++;
                }
            }

            for (String value : values) {
                result = readJsonByUrl(value);
                if (result != null) {
                    break;
                }
            }
        }
        if (result == null) {
            result = point.proceed();
        }
        return result;
    }

    // url = api/xx/xx
    private Object readJsonByUrl(String url) throws IOException {
        if (url == null) {
            return null;
        }
//        url = url.replace("/", "\\");
        String dataUrl = this.getClass().getClassLoader().getResource("mock/" + url + ".json").toString();
        dataUrl = dataUrl.replace("\\", "/");
        if (dataUrl.contains(":")) {
            dataUrl = dataUrl.replace("file:/", "");
        }
        System.out.println("Mock data path: " + dataUrl);
        Gson gson = new Gson();
        return gson.fromJson(FileUtils.readFileToString(new File(dataUrl), Charset.forName("utf8")), HashMap.class);
    }

}
