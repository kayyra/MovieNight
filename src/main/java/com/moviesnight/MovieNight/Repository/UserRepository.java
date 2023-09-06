package com.moviesnight.MovieNight.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moviesnight.MoviesNight.Models.user;

@Repository
public interface UserRepository extends JpaRepository<user, Long>  {
   
}
