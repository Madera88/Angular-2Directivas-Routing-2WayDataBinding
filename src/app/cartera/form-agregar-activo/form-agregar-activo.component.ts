import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activo } from '../activo.model';

@Component({
  selector: 'app-form-agregar-activo',
  templateUrl: './form-agregar-activo.component.html',
  styleUrls: ['./form-agregar-activo.component.css']
})
export class FormAgregarActivoComponent implements OnInit {

  @Output() activoCreado = new EventEmitter<Activo>();
  nombre:string="";
  precio:number=0;
  cantidad:number=0;

  AgregarCripto(){
    let cripto=new Activo(this.nombre,this.precio,this.cantidad);
    this.activoCreado.emit(cripto);
    //Limpiar formulario
    this.nombre="";
    this.precio=0;
    this.cantidad=0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
