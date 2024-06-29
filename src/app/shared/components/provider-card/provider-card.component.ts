import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'provider-component',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss'],
})
export class ProviderComponent implements OnInit {
  @Input() typeStreaming!: string;
  @Input() provider!: any;
  @Input() titleMovie!: string;
  @Output() close = new EventEmitter<void>();
  isEmpty!: boolean;

  ngOnInit(): void {
    if(this.provider === undefined){
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }

  whereToWatch(plataform: string): void {
    const movieTitle = this.titleMovie || '';
    const searchQuery = `Assistir ${movieTitle} ${plataform}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');
  }

  onClose(): void {
    this.close.emit();
  }
}
