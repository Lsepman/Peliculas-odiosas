import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';

import { PeliculasService } from '../../services/pelicula.service';
import { Genre } from '../../interfaces/detalles.interface';


@Component({
  selector: 'pelicula-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{

  @Input()
  public pelicula!: Pelicula;

  public listaGenres: Genre[] = [];

  constructor(private peliculaService: PeliculasService){}

 ngOnInit(): void {
   this.listaGenres = this.peliculaService.listadoGenre.filter((genero) =>  this.pelicula.genre_ids.includes(genero.id))
 }


}
