import { Component, OnInit } from '@angular/core';
import { Detalles, SpokenLanguage } from '../../interfaces/detalles.interface';
import { PeliculasService } from '../../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-mostrar-pelicula',
  templateUrl: './mostrar-pelicula.component.html',
  styleUrls: ['./mostrar-pelicula.component.css']
})
export class MostrarPeliculaComponent implements OnInit {

  public peliculaDetalle?: Detalles;

  constructor(private peliculaService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(200),
      switchMap(({ id }) => this.peliculaService.getPeliculasById(id)))
      .subscribe
      (peliculaDetalle => {
        if( !peliculaDetalle) return this.router.navigate(['/peliculas/search']);
        this.peliculaDetalle= peliculaDetalle;
        return;
      })
  }
  back(): void{
    this.router.navigate(['/peliculas/search']);
  }

}
