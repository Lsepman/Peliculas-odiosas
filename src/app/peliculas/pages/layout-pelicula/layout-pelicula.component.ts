import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasService } from '../../services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-pelicula',
  templateUrl: './layout-pelicula.component.html',
  styleUrls: ['./layout-pelicula.component.css']
})
export class LayoutPeliculaComponent {

  public sidebarItems =[
    {label: 'Listado', icon: 'label', route:'./list'},
    {label: 'Añadir', icon: 'add', route:'./new-hero'},
    {label:'Buscar', icon: 'search', route:'./search'},
  ]

  constructor(private router: Router
  ){}

  onLogout(): void{
  }


}

