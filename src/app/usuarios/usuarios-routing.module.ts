import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPeliculaComponent } from '../peliculas/pages/layout-pelicula/layout-pelicula.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';

const routes: Routes = [
  {path: '',
  component: LayoutPeliculaComponent,
  children: [
    {path: 'lista-usuarios', component: ListaUsuariosComponent},
    {path: 'add-usuario', component: EditarUsuariosComponent},
    {path: 'editar/:id', component: EditarUsuariosComponent},
    {path: '**', redirectTo: '404/error404'}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
