import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class MovieCardComponent {
  @Input() movies!:any;
  @Input() size!: string;
  @Input() type!: string;
  @Input() isLoading!: boolean;

  constructor(private router: Router, private viewportScroller: ViewportScroller){}

  onClickMovie(movieId: number): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/card-description', movieId]);
  }

  getPosterPath(movie: any): string {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/150';
  }
}
