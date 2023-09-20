package com.moviesnight.MovieNight.Controller;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.moviesnight.MovieNight.Repository.UserRepository;

@RestController
public class RegistrationController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User newUser, Object passwordEncoder){
        if(userRepository.findByUsername(newUser.getUsername()) !=null){
            return ResponseEntity.badRequest().body("El nombre de usuario ya está en uso.");

        }        
        userRepository.save(newUser);
        return ResponseEntity.ok("Registro Exitoso");
    }
}
