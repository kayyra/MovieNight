import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/service/favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
favorites: any[] = [];
constructor(private favoritesService: FavoritesService){}
 ngOnInit():void {
  this.favorites = this.favoritesService.getFavorites();
 }
 addFavorite(item: any){
  this.favoritesService.addFavorite(item);
 }
 removeFavorite(item: any){
  this.favoritesService.removeFavorites(item);
 }

}
