import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteraComponent } from './cartera/cartera.component';
import { ForoComponent } from './foro/foro.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [
  {path:"", component: PresentacionComponent},
  {path:"cartera", component: CarteraComponent},
  {path:"foro", component: ForoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
