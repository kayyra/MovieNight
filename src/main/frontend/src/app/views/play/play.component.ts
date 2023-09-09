import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {
  cards: any[] = [
    { title: 'Lilo & Stitch', movieCover: 'assets/img/lilo&stitch.jpg', flipped: false },
    { title: 'Free Guy', movieCover: 'assets/img/freeguy.jpg', flipped: false },
    { title: 'Barbie', movieCover: 'assets/img/barbie.jpg', flipped: false },
    { title: 'Dungeons & Dragons', movieCover: 'assets/img/dungeons&dragons.jpg', flipped: false }
  ];
  
  shuffledCards: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(){
  
    this.shuffledCards = [...this.cards];
  }

  shuffleCards() {
    this.shuffledCards = [...this.cards];
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    }
    
    this.cards.forEach(card => (card.flipped = false));
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
