package com.github.ChrisLepko.GoEshop.dao;

import com.github.ChrisLepko.GoEshop.model.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.awt.print.Pageable;
import java.util.List;

@CrossOrigin
@RepositoryRestResource(path = "users")
public interface UsersDao extends JpaRepository<Users, String> {

    List<Users> findByUsername(@RequestParam("username") String username);

    @Transactional
    @Procedure(name = "createUser")
    public void createUser(@Param("username") String username, @Param("name") String name, @Param("lastName") String lastName, @Param("password") String password);
}
