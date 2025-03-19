import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../../interfaces/pelicula.interface';

import { PeliculasService } from '../../services/pelicula.service';
import { Genre } from '../../../interfaces/detalles.interface';
import { FavoritaService } from '../../services/favorita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CLOSE } from 'src/app/shared/messages';


@Component({
  selector: 'pelicula-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{

  @Input()
  public pelicula!: Pelicula;

  public listaGenres: Genre[] = [];
  public esFavorita: boolean = false;

  constructor(private peliculaService: PeliculasService, private favoritaService: FavoritaService, private snackBar: MatSnackBar){}

 ngOnInit(): void {
   this.listaGenres = this.peliculaService.listadoGenre.filter((genero) =>  this.pelicula.genre_ids.includes(genero.id));
  if(this.favoritaService.favoritos.includes(this.pelicula.id)){
    this.esFavorita = true;
  }
  }

  async eliminarFavorita(){
    const RESPONSE = await this.favoritaService.eliminarPelicula(this.pelicula.id)
    if(RESPONSE){
      this.snackBar.open("Eliminada con exito", CLOSE,{duration: 3000});
    }
  }

  eliminarFavoritas(){
    this.eliminarFavorita();
  }

  aniadirFavoritas(){
    this.aniadirFavorita();
  }

  async aniadirFavorita(){
    const RESPONSE = await this.favoritaService.aniadirPelicula(this.pelicula.id)
    if(RESPONSE){
      this.snackBar.open("Añadida con exito", CLOSE,{duration: 3000});
    }
  }



}


