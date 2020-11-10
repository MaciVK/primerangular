import { Component } from '@angular/core';
@Component({
  selector: 'app-numeros-random',
  templateUrl: './numerosrandom.component.html',
  styleUrls: ['./numerosrandom.component.css'],
})
export class NumerosRandom {
  public arrayNumeros: Array<number>;
  constructor() {
    this.arrayNumeros = [5, 4, 8, 9];
  }

  generarNumeros() {
    var aleat = Math.floor(Math.random() * 100) + 1;
    this.arrayNumeros.push(aleat);
  }
}
