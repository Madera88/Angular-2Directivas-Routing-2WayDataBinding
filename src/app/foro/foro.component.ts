import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  posts:Post[]=[
    new Post("Admin","Bienvenidos al Foro de Inversión"),
    new Post("Anónimo"," Buenas tardes, que opinais de invertir en estos momentos?"),
    new Post("Optimista", "Es el mejor momento, adelante"),
    new Post("Pesimista", "Es el peor momento, ni loco"),
  ]

  incluirComentario(post: Post){
    this.posts.push(post);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
