import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorites.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss'],
})
export class FavoritesPage implements OnInit {
  nomeUsuario: string = '';
  favoriteMovies: any[] = [];
  isLoading = true;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(){
    const favorites = this.favoriteService.getFavorites();

    this.favoriteMovies = favorites.filter(movie => movie.id);
    this.isLoading = false;
  }
}
