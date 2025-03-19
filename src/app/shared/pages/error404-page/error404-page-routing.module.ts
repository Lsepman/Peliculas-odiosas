import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPeliculaComponent } from '../../../peliculas/pages/layout-pelicula/layout-pelicula.component';
import { Error404PageComponent } from './error404-page/error404-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPeliculaComponent,
    children: [
      {path: 'error404', component: Error404PageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Error404PageRoutingModule { }
