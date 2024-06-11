import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../home/interfaces/home-interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favoriteMoviesSubject = new BehaviorSubject<Movie[]>([]);
  favoriteMovies = this.favoriteMoviesSubject.asObservable();

  constructor() {}

  getFavorites(): Movie[] {
    const savedFavorites: Movie[] = JSON.parse(localStorage.getItem('favoriteMovies') ?? '[]');
    this.favoriteMoviesSubject.next(savedFavorites);
    return this.favoriteMoviesSubject.getValue();
  }

  addFavorite(movie: Movie): void {
    const currentFavorites = this.getFavorites();
    if (!currentFavorites.some(fav => fav.id === movie.id)) {
      currentFavorites.push(movie);
      this.updateFavorites(currentFavorites);
    }
  }

  removeFavorite(movie: Movie): void {
    const currentFavorites = this.getFavorites();
    const updatedFavorites = currentFavorites.filter(fav => fav.id !== movie.id);
    this.updateFavorites(updatedFavorites);
  }

  updateFavorites(favorites: Movie[]): void {
    this.favoriteMoviesSubject.next(favorites);
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }
}
