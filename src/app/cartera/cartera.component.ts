import { Component } from '@angular/core';
import { Activo } from './activo.model';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})
export class CarteraComponent {

 activos:Activo[]=[
  new Activo("Bitcoin",32000,0.2),
  new Activo("ETH",1800,0.5),
  new Activo("Cardano",0.3,800)
 ];

 IncluirActivo(crito:Activo){
  this.activos.push(crito);
 }

}
