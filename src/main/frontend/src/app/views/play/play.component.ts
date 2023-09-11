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
    { id: 1, name: 'Liloystitch', coverImage: 'assets/img/lilo&stitch.jpg',description: 'Description 1', isRevealed: false, flipped: false  },
    { id: 2, name: 'Free Guy', coverImage: 'assets/img/freeguy.jpg',description: 'Description 1', isRevealed: false, flipped: false },
    { id: 3, name: 'Barbie', coverImage: 'assets/img/barbie.jpg',description: 'Description 1', isRevealed: false, flipped: false },
    { id: 4, name: 'Dungeonsanddragons', coverImage: 'assets/img/dungeons&dragons.jpg',description: 'Description 1', isRevealed: false, flipped: false  },   
    { id: 5, name: 'Intime', coverImage: 'assets/img/intime.jpg',description: 'Description 1', isRevealed: false, flipped: false  },
    { id: 6, name: 'HarryPotter', coverImage: 'assets/img/harrypotter1.jpg',description: 'Description 1', isRevealed: false, flipped: false }
  ];

  shuffledCards: any[] = [];
  selectedCard: Movie | null = null;

  constructor(private router: Router) {}

  ngOnInit(){ 
    this.shuffleCards();
  } 
   

  onCardClick(card: Movie) {
    if (!card.isRevealed){
      card.isRevealed = true;
      console.log(`Card ${card.name} is revealed: ${card.isRevealed}`);
      this.selectedCard = card;
      this.movies.forEach(movie =>{
        if (movie !== card){
          movie.isRevealed = false;
        }
      });
      setTimeout(() => {
        this.navigateToSelectedCard();
      }, 2000);
    }
  }

  navigateToSelectedCard(){
    console.log('Navigate to selected card');
    if(this.selectedCard){
      const route = `/${this.selectedCard.name.toLowerCase().replace(/\s+/g, '')}`;
      this.router.navigate([route]);
    }
  }

  // onCardClicked(movie: Movie) {
  //   if (!movie.isRevealed) {
  //     movie.isRevealed = true;
  //   }
  // }

  shuffleCards() {
    this.shuffledCards = [...this.movies];
    for(let i = this.shuffleCards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * ( i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    }

    this.movies.forEach(movie => (movie.isRevealed = false));
  }
    // this.shuffledCards = [...this.movies];
    // for (let i = this.shuffledCards.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    // }
    
    // this.movies.forEach(movie => (movie.flipped = false));
  }

  

