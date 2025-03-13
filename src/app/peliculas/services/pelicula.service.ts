import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Pelicula, SearchResponse } from '../interfaces/pelicula.interface';
import { Detalles, Genre} from '../interfaces/detalles.interface';
import { Genres } from '../interfaces/genres.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

private apiKey: string = '22f6c616a54adc3cc571bdf0e3308702';
private apiUrl: string= 'https://api.themoviedb.org/3'

private listaPeliculas: Pelicula[] =[];
private listaGenre: Genre[] = [];

constructor(private http: HttpClient) { }


public cargando = false;


buscarPeliculas(query:string){
   this.http.get<SearchResponse>(`${this.apiUrl}/search/movie?query=${query}&language=en-US&page=1&api_key=${this.apiKey}`)
   .subscribe(res=>{
      console.log(res)
      this.listaPeliculas=res.results
      console.log(this.listaPeliculas)
    })

}
  getPeliculasById(id: number): Observable<Detalles>{
    return this.http.get<Detalles>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  get listadoPeliculas(){
    return this.listaPeliculas
  }
  get listadoGenre(){
    return this.listaGenre
  }

  buscarGenre(){
   this.http.get<Genres>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`).subscribe(res =>{
      this.listaGenre= res.genres
    })
  }
}
