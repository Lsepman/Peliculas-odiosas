import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout-pelicula',
  templateUrl: './layout-pelicula.component.html',
  styleUrls: ['./layout-pelicula.component.css']
})
export class LayoutPeliculaComponent {
  userName: string= localStorage.getItem('usuario')!;
  idRol: number= Number(localStorage.getItem('id_rol'));
  url = 'peliculas'

  public sidebarItems =[
    {label:'Buscar', icon: 'search', url:`${this.url}/search`},
    {label: 'Favoritos', icon: 'favorite', url:`${this.url}/favoritos`}


  ]

  usuario: string = localStorage.getItem('nombre_publico')!;
  esAdmin: boolean = false;

  constructor(private authService: AuthService,
    private router: Router){}

  onLogout(): void{
    this.authService.doLogout().subscribe(response =>{})
    this.router.navigate(['/']);
  }


}

