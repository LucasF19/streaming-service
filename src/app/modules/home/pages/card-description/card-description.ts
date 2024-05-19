import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Genre } from '../../interfaces/home-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'card-description',
  templateUrl: './card-description.html',
  styleUrls: ['./card-description.scss'],
})
export class CardDescription implements OnInit {
  isLoading = true;
  typesMovie: Genre[] = [];

  movieId!: string;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') ?? "";
    this.getMovieDetails(this.movieId);
  }

  getMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe(data => {
      this.movieDetails = data;
    });
  }
}
