package com.github.ChrisLepko.GoEshop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.sql.DataSource;

@EnableWebSecurity
public class SecurityConfiguration  extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/create/product").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE,"/create/product/*").hasRole("ADMIN")
                .antMatchers(HttpMethod.POST,"/create/category").hasRole("ADMIN")
//                .antMatchers(HttpMethod.GET,"/products").hasAnyRole("ADMIN", "USER")
//                .antMatchers(HttpMethod.GET,"/products/*").hasAnyRole("ADMIN", "USER")
//                .antMatchers(HttpMethod.GET,"/products/search/*").hasAnyRole("ADMIN", "USER")
//                .antMatchers(HttpMethod.GET,"/users/*").hasAnyRole("ADMIN", "USER")
//                .antMatchers(HttpMethod.PUT,"/users/update").hasAnyRole("ADMIN", "USER")
//                .antMatchers(HttpMethod.GET,"/authcheck").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.GET,"/product-categories").permitAll()
                .antMatchers(HttpMethod.POST,"/users/create").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .anyRequest().authenticated()
                .and().httpBasic();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
