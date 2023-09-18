package com.moviesnight.MovieNight.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviesnight.MovieNight.Models.film;

public interface FilmRepository extends JpaRepository<film, Long> {
    
}
