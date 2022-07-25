import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { CarteraComponent } from './cartera/cartera.component';
import { ForoComponent } from './foro/foro.component';
import { FormAgregarActivoComponent } from './cartera/form-agregar-activo/form-agregar-activo.component';
import { ResultadoComponent } from './cartera/resultado/resultado.component';
import { ListadoComponent } from './cartera/listado/listado.component';
import { FormsModule } from '@angular/forms';
import { ComentarComponent } from './foro/comentar/comentar.component';
import { ComentariosComponent } from './foro/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    CarteraComponent,
    ForoComponent,
    FormAgregarActivoComponent,
    ResultadoComponent,
    ListadoComponent,
    ComentarComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
