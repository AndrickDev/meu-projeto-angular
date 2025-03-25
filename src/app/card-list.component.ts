import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Lista de Cards</span>
    </mat-toolbar>

    <div class="card-container">
      <mat-card *ngFor="let card of cards; let i = index" class="card">
        <mat-card-header>
          <mat-card-title>{{ card.title }}</mat-card-title>
          <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
        </mat-card-header>

        <img mat-card-image src="https://via.placeholder.com/150" alt="Imagem do Card">

        <mat-card-content>
          <p>{{ card.description }}</p>
        </mat-card-content>

        <mat-card-actions>
          <button mat-button color="primary" (click)="curtir(i)">
            <mat-icon color="warn">thumb_up</mat-icon> Curtir ({{ card.likes }})
          </button>
          <button mat-button color="accent">
            <mat-icon color="primary">share</mat-icon> Compartilhar
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      padding: 16px;
    }

    .card {
      width: 320px;
    }
  `]
})
export class CardListComponent {
  cards = [
    { title: 'Card 1', subtitle: 'Sub 1', description: 'Descrição 1', likes: 4 },
    { title: 'Card 2', subtitle: 'Sub 2', description: 'Descrição 2', likes: 2 },
    { title: 'Card 3', subtitle: 'Sub 3', description: 'Descrição 3', likes: 3 },
  ];

  curtir(index: number) {
    this.cards[index].likes++;
  }
}
