import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Genre } from '../../interfaces/home-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class AppHome implements OnInit {
  releasesMovies = [];
  genresMovies: { [key: string]: any[] } = {};
  avatar = '/docs/images/people/profile-picture-5.jpg';
  isLoading = true;

  typesMovie: Genre[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getTypesList();
    this.getAllMovies();
  }


  getTypesList() {
    this.movieService.getTypesList().subscribe((data: any) => {
      this.typesMovie = data.genres;
      this.getMoviesByGenres();
    });
  }

  getMoviesByGenres() {
    this.typesMovie.forEach(genre => {
      this.movieService.getMoviesByGenre(genre.id).subscribe((data: any) => {
        this.genresMovies[genre.name] = data.results;
        this.isLoading = false;
      });
    });
  }

  getAllMovies() {
    this.movieService.getReleasesMovies().subscribe((data: any) => {
      this.releasesMovies = data.results;
      this.isLoading = false;
    });
  }
}
