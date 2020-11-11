import { Component } from '@angular/core';

//DECLARACION DEL COMPONENTE Y SU ESTRUCTURA DE ARCHIVOS ADEMAS DE SU NOMBRE
@Component({
  //NOMBRE DEL COMPONENTE PARA LA APP
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
})

//Este nombre es para la declaracion en MODULE
export class PrimerComponente {
  //SE DECLARAN LAS VARIABLES PARA LA CLASE CON SU TIPO
  public nombre: string;
  public anyo: number;

  //La primera vez que entra en el componente tenemos un constructor

  constructor() {
    console.log('♪♪Creando el primer componente......♪♪');
    //CON this ACCEDEMOS A LAS PROPIEDADES
    this.nombre = 'Gabri Angular';
    this.anyo = 2020;
  }
}
