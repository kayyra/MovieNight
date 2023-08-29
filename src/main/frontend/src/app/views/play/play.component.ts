import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {
  cards = [
    {title: 'Lilo & Stitch', movieCover: 'assets/img/lilo&stitch.jpg'},
    {title: 'Freeguy',movieCover: 'assets/img/freeguy.jpg'},
    {title: 'Barbie', movieCover: 'assets/img/barbie.jpg'},
    {title: 'Barbie', movieCover: 'assets/img/dungeons&dragons.jpg'}
   ];
  
   shuffleCards(){
     for(let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1 ));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
     }
   }
}
