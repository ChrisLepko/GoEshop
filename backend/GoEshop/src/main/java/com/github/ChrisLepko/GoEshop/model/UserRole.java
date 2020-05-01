package com.github.ChrisLepko.GoEshop.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "authorities")
public class UserRole {

    @Id
    private String username;

    @Column(name = "authority")
    private String role;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "role")
    private Set<Users> users;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set<Users> users) {
        this.users = users;
    }
}
