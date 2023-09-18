package com.moviesnight.MovieNight.Controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviesnight.MovieNight.Repository.FilmRepository;

@RestController
@RequestMapping("/films")
public class FilmController {
    private final FilmRepository filmRepository;

    @Autowired
    public FilmController(FilmRepository filmRepository){
        this.filmRepository = filmRepository;
    }    

    @PostMapping("/submit")
    public ResponseEntity<String> submitFilm(@RequestBody com.moviesnight.MovieNight.Models.film film){

        filmRepository.save(film);

        return ResponseEntity.ok("Film submitted succeddfully!");
    }

}
