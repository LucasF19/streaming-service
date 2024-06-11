import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '../../services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss'],
})
export class FavoritesPage implements OnInit {
  favoriteMovies: any[] = [];
  isLoading = true;

  constructor(private favoriteService: FavoriteService, private router: Router) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(){
    const favorites = this.favoriteService.getFavorites();

    this.favoriteMovies = favorites.filter(movie => movie.id);
    this.isLoading = false;
  }
}
