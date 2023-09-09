import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  originalCards: any[] = [];  
  shuffledCards: any[] = [];  

  shuffleCards() {
    
    for (let i = this.shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledCards[i], this.shuffledCards[j]] = [this.shuffledCards[j], this.shuffledCards[i]];
    }
  }
  
  @Input() movie: any;
  flipped: boolean = false;

  flipCard(){
    this.flipped = !this.flipped;
  }
}
