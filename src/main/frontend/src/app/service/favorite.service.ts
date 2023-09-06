import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private FavoriteSCardsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  favoriteCards$: Observable<string[]> = this.FavoriteSCardsSubject.asObservable();
  constructor() { }

  addToFavorites(card: string){
    const currentFavorites = this.FavoriteSCardsSubject.getValue();
    currentFavorites.push(card);
    this.FavoriteSCardsSubject.next(currentFavorites);
    }
  }

