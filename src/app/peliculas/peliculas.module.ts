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
import { FavoritosPageComponent } from './pages/favoritos-pelicula/favoritos-page.component';
import { CardFavoritasComponent } from './components/card-favoritas/card-favoritas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    LayoutPeliculaComponent,
    CardListComponent,
    SearchBoxComponent,
    MostrarPeliculaComponent,
    PeliculaImagePipe,
    DetalleImagePipe,
    FavoritosPageComponent,
    CardFavoritasComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports:[LayoutPeliculaComponent]
})
export class PeliculasModule { }
