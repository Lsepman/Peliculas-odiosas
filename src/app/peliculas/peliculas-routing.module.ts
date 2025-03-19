import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPeliculaComponent } from './pages/layout-pelicula/layout-pelicula.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MostrarPeliculaComponent } from './pages/mostrar-pelicula/mostrar-pelicula.component';
import { FavoritosPageComponent } from './pages/favoritos-pelicula/favoritos-page.component';

const routes: Routes = [
  { path:'',
    component: LayoutPeliculaComponent,
    children:[
      {path: 'search', component: SearchBoxComponent},
      {path: 'favoritos', component: FavoritosPageComponent},
      {path: ':id', component: MostrarPeliculaComponent},
      {path: '**', redirectTo: '404/error404'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
