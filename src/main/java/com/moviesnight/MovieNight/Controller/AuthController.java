package com.moviesnight.MovieNight.Controller;

import java.util.Optional;


import org.apache.catalina.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/users")
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public Optional<User> getBId(@PathVariable("userId") Long userID){
        return userService.getUser(userID);
    }

   
    // @GetMapping
    // public List<User> getAllUsers(){
    //     return userService.getUsers();
    // }

    @PostMapping
    public User saveUpdate(@RequestBody User user){
        userService.saveOrUpdate(user);
        return user;
    }

    @DeleteMapping("/{userId}")
    public void saveUpdate(@PathVariable("studentId") Long userId){
        userService.delete(userId);
    }
    
}
