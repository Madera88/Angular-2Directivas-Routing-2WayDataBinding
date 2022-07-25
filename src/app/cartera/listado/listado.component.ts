import { Component, Input } from '@angular/core';
import { Activo } from '../activo.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  @Input() activos:Activo[];

}
