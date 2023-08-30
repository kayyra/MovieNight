import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
 private favorites: any[] = [];
 addFavorite(item: any){
  this.favorites.push(item);
 }
 removeFavorites(item: any){
  this.favorites = this.favorites.filter(favorite => favorite !== item);
 }
 getFavorites(){
  return this.favorites;
 }
  constructor() { }
}
