import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  templateUrl: './sumarnumeros.component.html',
  styleUrls: ['./sumarnumeros.component.css'],
})
export class SumarNumeros implements OnInit {
  public suma: number;
  @ViewChild('cajaNumero1') cajaNumero1: ElementRef;
  @ViewChild('cajaNumero2') cajaNumero2: ElementRef;
  sumarNumeros() {
    var num1 = parseInt(this.cajaNumero1.nativeElement.value);
    var num2 = parseInt(this.cajaNumero2.nativeElement.value);
    this.suma = num1 + num2;
  }
  constructor() {}

  ngOnInit(): void {}
}
