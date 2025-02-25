import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class AppComponent {
  cards = [
    {
      titulo: 'Card 1',
      subtitulo: 'Subtítulo 1',
      imagem: 'https://via.placeholder.com/400x200',
      descricao: 'Este é o primeiro card.',
      curtidas: 0
    },
    {
      titulo: 'Card 2',
      subtitulo: 'Subtítulo do Card 2',
      imagem: 'https://via.placeholder.com/400x200',
      descricao: 'Este é o segundo card.',
      curtidas: 0
    },
    {
      titulo: 'Card 3',
      subtitulo: 'Subtítulo do Card 3',
      imagem: 'https://via.placeholder.com/400x200',
      descricao: 'Este é o terceiro card.',
      curtidas: 0
    }
  ];

  curtir(card: any) {
    this.cards = this.cards.map(c =>
      c === card ? { ...c, curtidas: c.curtidas + 1 } : c
    );
  }
}