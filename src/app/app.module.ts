import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import {
  PrimerComponente /*este es el nombre que está en el export class */,
} from './../components/primercomponente/primercomponente.component';
import { CiclosVida } from './../components/ciclosvida/ciclosvida.component';
import { Deportes } from './../components/deportes/deportes.component';
import { NumerosRandom } from './../components/numerosrandom/numerosrandom.component';
@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    CiclosVida,
    Deportes,
    NumerosRandom,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
