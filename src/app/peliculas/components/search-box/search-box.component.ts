import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../../services/pelicula.service';

@Component({
  selector: 'pelicula-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @ViewChild('textInputPelicula')
  public inputPelicula! : ElementRef<HTMLInputElement>

  constructor(private peliculasService: PeliculasService) { }

  buscarPelicula(){

    const nuevaPelicula = this.inputPelicula.nativeElement.value.trim();
    console.log(nuevaPelicula)
    this.peliculasService.buscarPeliculas(nuevaPelicula);
    this.inputPelicula.nativeElement.value=""
  }

  get peliculas(){
    return this.peliculasService.listadoPeliculas
  }

  ngOnInit(): void {
    this.peliculasService.buscarGenre();
  }

}
