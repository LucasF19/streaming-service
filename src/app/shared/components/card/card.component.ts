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

  constructor(private router: Router){}

  onClickMovie(movieId: number): void {
    this.router.navigate(['/card-description', movieId]);
  }
}
