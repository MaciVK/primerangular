import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ciclos-vida',
  templateUrl: './ciclosvida.component.html',
})
export class CiclosVida implements OnInit, DoCheck {
  public mensaje: string;

  //CREAMOS UN METODO DE ACCION, LE LLAMAREMOS CON UN BUTTON
  cambiarMensaje() {
    this.mensaje += 'Pues de mierda te hartes. ';
  }

  constructor() {
    console.log('Constructor, yo primer');
    this.mensaje = 'Hoy es Martes. ';
  }
  ngOnInit(): void {
    console.log('Ejecutando Metodo OnInit(), yo segun');
  }
  ngDoCheck() {
    console.log('Soy el Metodo DoCheck(), yo tercer');
  }
}
