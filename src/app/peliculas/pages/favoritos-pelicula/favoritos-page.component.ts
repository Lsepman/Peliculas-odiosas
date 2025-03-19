import { Component, OnInit } from '@angular/core';
import { FavoritaService } from '../../services/favorita.service';
import { URL_API } from 'src/environment/environments';
import { PeliculasService } from '../../services/pelicula.service';
import { HttpClient } from '@angular/common/http';
import { Detalles } from 'src/app/interfaces/detalles.interface';

@Component({
  selector: 'app-favoritos-page',
  templateUrl: './favoritos-page.component.html',
  styleUrls: ['./favoritos-page.component.css']
})
export class FavoritosPageComponent implements OnInit{

  favoritas: number[] = [];
  token: string = '';

  constructor(private favoritaService: FavoritaService, private peliculasService: PeliculasService){}


  ngOnInit(): void {
    this.token = localStorage.getItem('token')?.trim() || ''; // Elimina espacios extra
    if (this.token) {
    this.obtenerFavoritas();
  }
  }

  obtenerFavoritas(){
    this.favoritaService.get(this.token).subscribe(response => {
      console.log('Respuesta completa de la API:', response); // 💡 Verificar la respuesta exacta

      if (response.data) { // 💡 Verifica que `status` sea `true`
        console.log("Películas favoritas obtenidas correctamente:", response.data);
        this.cargarDetallesPeliculas(response.data);
      }

    }, error => {
      console.error('Error en la petición HTTP:', error);
    });
  }



cargarDetallesPeliculas(id: number[]) {
  this.favoritas = []; // Limpiar array antes de cargar datos

  id.forEach(id => {
    this.peliculasService.getPeliculasById(id).subscribe((pelicula: Detalles) => {
      this.favoritas.push(pelicula.id);
    }, error => {
      console.error(`Error al obtener detalles de la película ${id}:`, error);
    });
  });
}


}
