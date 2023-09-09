import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
   
  @Input() movie: any;
  flipped: boolean = false;

  flipCard(){
    this.flipped = !this.flipped;
  }
}
