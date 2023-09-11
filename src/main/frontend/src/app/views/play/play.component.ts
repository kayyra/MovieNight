import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {


  movies: Movie[] = [
    { id: 1, name: 'Lilo & Stitch', coverImage: 'assets/img/lilo&stitch.jpg',description: 'Description 1', isRevealed: false, flipped: false  },
    { id: 2, name: 'Free Guy', coverImage: 'assets/img/freeguy.jpg',description: 'Description 1', isRevealed: false, flipped: false },
    { id: 3, name: 'Barbie', coverImage: 'assets/img/barbie.jpg',description: 'Description 1', isRevealed: false, flipped: false },
    { id: 4, name: 'Dungeons & Dragons', coverImage: 'assets/img/dungeons&dragons.jpg',description: 'Description 1', isRevealed: false, flipped: false  },   
    { id: 5, name: 'Intime', coverImage: 'assets/img/intime.jpg',description: 'Description 1', isRevealed: false, flipped: false  },
    { id: 6, name: 'HarryPotter', coverImage: 'assets/img/harrypotter1.jpg',description: 'Description 1', isRevealed: false, flipped: false }
  ];
  
  shuffledCards: any[] = [];

  constructor(private router: Router) {}

  onCardClicked(movie: Movie) {
    if (!movie.isRevealed) {
      movie.isRevealed = true;
    }
  }

  ngOnInit(){  
    this.shuffledCards = [...this.movies];
  }

  shuffleCards() {
    this.shuffledCards = [...this.movies];
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    }
    
    this.movies.forEach(movie => (movie.flipped = false));
  }

  onCardClick(card: any) {
    card.flipped = true;
    if (card.title === 'Lilo & Stitch') {
      this.router.navigate(['/liloystitch']);
    } else if (card.title === 'Free Guy') {
      this.router.navigate(['/freeguy']);
    } else if (card.title === 'Barbie') {
      this.router.navigate(['/barbie']);
    } else if (card.title === 'Dungeons & Dragons') {
      this.router.navigate(['/dungeonsandragons']);
    }
  }
}
