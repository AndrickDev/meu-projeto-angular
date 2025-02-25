import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component'; // Certifique-se de que está importado

@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    AppComponent 
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule { }