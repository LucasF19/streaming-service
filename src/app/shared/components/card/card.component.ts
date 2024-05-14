import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class MovieCardComponent {
  @Input() movies!:any;
  @Input() size!: string;
}
