package com.github.ChrisLepko.GoEshop.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {

    @Id
    private String username;

    private String name;

    private String lastName;

    private String password;

    private boolean enabled;

    @ManyToOne
    @JoinColumn(nullable = false)
    private UserRole role;

    protected Users(){

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

}