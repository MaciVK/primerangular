import { Component } from '@angular/core';
@Component({
  selector: 'app-positivo-negativo',
  templateUrl: './positivonegativo.component.html',
})
export class PositivoNegativo {
  public arrayNumeros: Array<number>;
  constructor() {
    this.arrayNumeros = [7, -20, 8, -84, 26];
  }
}
