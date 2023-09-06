import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  
  constructor(private favoriteService: FavoriteService){}

  // get favoriteCards(): string[] {
  //   return this.favoriteService.getFavorites().subscribe((cards) =>{
  //     this.favoriteCards = cards;
  //   });
  }


