import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-comentar',
  templateUrl: './comentar.component.html',
  styleUrls: ['./comentar.component.css']
})
export class ComentarComponent  {

  @Output() comentario= new EventEmitter<Post>()
  nombre:string="";
  mensaje:string="";

  comentar(){
    let opinion=new Post(this.nombre,this.mensaje);
    this.comentario.emit(opinion);
    this.nombre="";
    this.mensaje="";

  }
  constructor() { }

  ngOnInit(): void {
  }

}
