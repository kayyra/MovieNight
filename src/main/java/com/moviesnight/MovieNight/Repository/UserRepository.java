package com.moviesnight.MovieNight.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.moviesnight.MovieNight.Models.user;
public interface UserRepository extends JpaRepository<user, Long>  {   
}
