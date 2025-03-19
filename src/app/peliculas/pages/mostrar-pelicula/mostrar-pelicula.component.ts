import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Detalles, Genre } from 'src/app/interfaces/detalles.interface';


@Component({
  selector: 'app-mostrar-pelicula',
  templateUrl: './mostrar-pelicula.component.html',
  styleUrls: ['./mostrar-pelicula.component.css']
})
export class MostrarPeliculaComponent implements OnInit {

  public peliculaDetalle?: Detalles;
  public listaGenres!: Genre[];


  constructor(private peliculaService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.peliculaService.getPeliculasById(id)))
      .subscribe
      (peliculaDetalle => {
        if( !peliculaDetalle) return this.router.navigate(['/peliculas/search']);
        this.peliculaDetalle= peliculaDetalle;

        this.listaGenres = this.peliculaService.listadoGenre.filter((genero) =>  this.peliculaDetalle?.genres.map(genre => genre.id).includes(genero.id));

        return;
      })
  }
  back(): void{
    this.router.navigate(['/peliculas/search']);
  }

}
