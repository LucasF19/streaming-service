import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'watch-modal',
  templateUrl: './watch-modal.component.html',
  styleUrls: ['./watch-modal.component.scss'],
})
export class WhereToWatchModalComponent implements OnInit {
  @Input() providers!: Array<any>;
  @Input() movieName!: any;
  @Output() close = new EventEmitter<void>();
  isEmpty!: boolean;

  ngOnInit(): void {
    if(this.providers === undefined){
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  whereToWatch(plataform: string): void {
    const movieTitle = this.movieName || '';
    const searchQuery = `Assistir ${movieTitle} ${plataform}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');
  }

  onClose(): void {
    this.close.emit();
  }
}
