import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//NOMBRE DE LA CLASE
import {
  PrimerComponente /*este es el nombre que está en el export class */,
} from './components/primercomponente/primercomponente.component';
import { CiclosVida } from './components/ciclosvida/ciclosvida.component';
import { Deportes } from './components/deportes/deportes.component';
import { NumerosRandom } from './components/numerosrandom/numerosrandom.component';
import { Formulariopersona } from './components/formulariopersona/formulariopersona.component';
import { SumarNumeros } from './components/sumarnumeros/sumarnumeros.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    CiclosVida,
    Deportes,
    NumerosRandom,
    Formulariopersona,
    SumarNumeros,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
