import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/modules/home/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss'],
})
export class FavoritesPage implements OnInit {
  result: any;
  isLoading!: boolean;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.result = [];
  }
}
