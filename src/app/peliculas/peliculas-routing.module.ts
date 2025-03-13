import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPeliculaComponent } from './pages/layout-pelicula/layout-pelicula.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MostrarPeliculaComponent } from './pages/mostrar-pelicula/mostrar-pelicula.component';

const routes: Routes = [
  { path:'',
    component: LayoutPeliculaComponent,
    children:[
      {path: 'search', component: SearchBoxComponent},
      {path: 'mostrar', component: MostrarPeliculaComponent},
      {path: ':id', component: MostrarPeliculaComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
