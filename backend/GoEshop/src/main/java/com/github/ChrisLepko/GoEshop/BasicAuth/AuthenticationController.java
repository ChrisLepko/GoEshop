package com.github.ChrisLepko.GoEshop.BasicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthenticationController {

    @GetMapping(path = "/authcheck")
    public AuthenticationBean authenticationBean(){
        return new AuthenticationBean("You are authenticated");
    }
}
