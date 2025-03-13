import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { LayoutPeliculaComponent } from './pages/layout-pelicula/layout-pelicula.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../material/material.module';
import { MostrarPeliculaComponent } from './pages/mostrar-pelicula/mostrar-pelicula.component';
import { PeliculaImagePipe } from './pipes/pelicula-image.pipe';
import { DetalleImagePipe } from './pipes/detalle-image.pipe';


@NgModule({
  declarations: [
    LayoutPeliculaComponent,
    CardListComponent,
    SearchBoxComponent,
    MostrarPeliculaComponent,
    PeliculaImagePipe,
    DetalleImagePipe,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule
  ],
  exports:[LayoutPeliculaComponent]
})
export class PeliculasModule { }
