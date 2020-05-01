package com.github.ChrisLepko.GoEshop;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/")
    public String home(){
        return ("<h1>Welcome</h1>");
    }

    @GetMapping("/pajac")
    public String user(){
        return ("<h1>Welcome User</h1>");
    }

    @GetMapping("/adminpajac")
    public String admin(){
        return ("<h1>Welcome Admin</h1>");
    }
}
