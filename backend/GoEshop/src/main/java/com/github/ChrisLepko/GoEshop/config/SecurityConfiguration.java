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
//                .antMatchers("/adminpajac").hasRole("ADMIN")
//                .antMatchers("/pajac").hasAnyRole("ADMIN", "USER")
//                .antMatchers("/users/**").permitAll()
//                .antMatchers("/authcheck").hasAnyRole("ADMIN", "USER")
                .antMatchers(HttpMethod.POST,"/users/create").permitAll()
                .antMatchers(HttpMethod.POST,"/check/upload").permitAll()
                .antMatchers(HttpMethod.POST,"/create/product").permitAll()
                .antMatchers(HttpMethod.DELETE,"/create/product/*").permitAll()
                .antMatchers(HttpMethod.POST,"/create/category").permitAll()
                .antMatchers(HttpMethod.GET,"/check/get/*").permitAll()
                .antMatchers(HttpMethod.GET,"/product-categories").permitAll()
                .antMatchers(HttpMethod.GET,"/products").permitAll()
                .antMatchers(HttpMethod.GET,"/products/*").permitAll()
                .antMatchers(HttpMethod.GET,"/products/search/*").permitAll()
                .antMatchers(HttpMethod.GET,"/users/*").permitAll()
                .antMatchers(HttpMethod.PUT,"/users/update").permitAll()
                .antMatchers(HttpMethod.POST,"/users/update").permitAll()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .anyRequest().authenticated()
                .and().httpBasic();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
