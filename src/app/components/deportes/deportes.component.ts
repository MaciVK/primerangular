import { Component } from '@angular/core';
@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
})
export class Deportes {
  public deportes: Array<string>;
  constructor() {
    // Inicializamos la variable con una serie de deportes
    this.deportes = [
      'Petanca',
      'Volley',
      'Jurgol',
      'Basket',
      'Surf',
      'Balonmano',
      'SillonBol',
      'Bobsleigh',
    ];
  }
}
