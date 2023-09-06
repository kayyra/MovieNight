import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';


@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.scss']
})
export class HarrypotterComponent {
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef; 
isMuted: boolean =false;


constructor(private favoriteService: FavoriteService) {} 


toggleSound(){
  const audioPlayer = this.audioPlayer.nativeElement;
  if(this.isMuted){
      audioPlayer.play();
    }else{
      audioPlayer.pause();
    }
    this.isMuted = !this.isMuted;
  }

  
  addToFavorites(card: string) {
    console.log('addToFavorites called with card:', card);
    this.favoriteService.addToFavorites(card);
  }
}
