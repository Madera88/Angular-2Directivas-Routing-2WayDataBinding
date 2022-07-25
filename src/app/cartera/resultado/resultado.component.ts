import { Component, Input, OnInit } from '@angular/core';
import { Activo } from '../activo.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() activos:Activo[];

     cotizacion: Array<any>=[
      {"nombre":"Bitcoin", "precio":22000},
      { "nombre":"ETH", "precio":1500},
      { "nombre":"Cardano", "precio":0.5},
      { "nombre":"Solana", "precio":40},
      { "nombre":"BNB", "precio":255.90},
      { "nombre":"Dagecoin", "precio":0.06}

    ]

  constructor() { }

  ngOnInit(): void {
  }

}
