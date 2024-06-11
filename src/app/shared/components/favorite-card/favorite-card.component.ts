import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { convertRuntime } from '../../formatters/currect-hour';

@Component({
  selector: 'favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.scss'
})
export class FavoriteCardComponent{
  @Input() movies: any = [];
  @Input() isLoading!: boolean;
  result!: any;

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

  convertRuntime(runtime: number): string {
    return convertRuntime(runtime);
  }
}
