import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
 },
  {
    path:'peliculas',
    loadChildren:() => import('./peliculas/peliculas.module').then(m=>m.PeliculasModule)
  },
  {
    path:'usuarios',
    loadChildren:() => import('./usuarios/usuarios.module').then(m=>m.UsuariosModule)
  },

    {
     path:'404',
     loadChildren: () => import('./shared/pages/error404-page/error404-page.module').then(m=>m.Error404PageModule)
   },
   {

    //Para dejar una ruta por defecto que redirija a heroes
    path: '' ,
    redirectTo: 'home',
    pathMatch: 'full' //Añadimos esto porque hay muchas cadenas vacias en cualquier ruta que provocan error
    },
    {
      //Ruta comodin que nos envia a la pagina de error
      path:'**',
      redirectTo: '404/error404'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
