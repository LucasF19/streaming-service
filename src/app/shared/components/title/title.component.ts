import { Component, Input } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
