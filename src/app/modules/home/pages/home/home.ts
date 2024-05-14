import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class AppHome implements OnInit{
  releasesMovies = [];
  actionMovies = [];
  animationMovies = [];
  avatar = '/docs/images/people/profile-picture-5.jpg';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAnimationMovies();
    this.getActionMovies();
  }

  getAllMovies(){
    this.movieService.getReleasesMovies().subscribe((data: any) => {
      this.releasesMovies = data.results;
    });
  }

  getAnimationMovies(){
    this.movieService.getMoviesByGenre(16).subscribe((data: any) => {
      this.animationMovies = data.results;
    });
  }

  getActionMovies(){
    this.movieService.getMoviesByGenre(18).subscribe((data: any) => {
      this.actionMovies = data.results;
    });
  }
}
