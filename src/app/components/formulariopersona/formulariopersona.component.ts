import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css'],
})
export class Formulariopersona implements OnInit {
  public user: any;
  public mensaje: string;
  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
    this.mensaje = '';
  }
  recibirDatos() {
    this.mensaje = 'Datos Recibidos';
    console.log(this.user);
  }
  ngOnInit(): void {}
}
