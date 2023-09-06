package com.moviesnight.MoviesNight.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "login_form")
public class user {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
  
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;
   
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }   
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
}
