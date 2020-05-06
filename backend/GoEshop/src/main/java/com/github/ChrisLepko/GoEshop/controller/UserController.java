package com.github.ChrisLepko.GoEshop.controller;

import com.github.ChrisLepko.GoEshop.dao.UsersDao;
import com.github.ChrisLepko.GoEshop.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin()
@RestController
public class UserController {

    @Autowired
    private UsersDao usersDao;

    @PostMapping("users/create")
    public String createUser(@Param("username") String username, @Param("name") String name, @Param("lastName") String lastName, @Param("password") String password){
        usersDao.createUser(username, name, lastName, password);

        return "User created";
    }

    @PutMapping("users/update")
    public String updateUser(@Param("username") String username, @Param("name") String name, @Param("lastName") String lastName, @Param("password") String password, @Param("oldUsername") String oldUsername) {
        usersDao.updateUser(username, name, lastName, password, oldUsername);
        return "User updated";
    }


}
