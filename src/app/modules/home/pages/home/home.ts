import { Component, Input } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class AppHome {
  titleHome!: 'teste';
  movies = [
    { title: 'Movie 1', overview: 'Overview 1', poster_path: '/path/to/poster1.jpg' },
    { title: 'Movie 2', overview: 'Overview 2', poster_path: '/path/to/poster2.jpg' },
  ];

  constructor(private tmdbService: TmdbService) { }

  getAllMovies(){
    this.tmdbService.getAllMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
