import { Component } from '@angular/core';
import { CardListComponent } from './card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardListComponent],
  template: `<app-card-list></app-card-list>`
})
export class AppComponent {}
