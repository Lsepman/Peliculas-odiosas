import { Pipe, PipeTransform } from "@angular/core";
import { Pelicula } from "../interfaces/pelicula.interface";
import { Detalles } from '../interfaces/detalles.interface';

@Pipe({
  name: 'peliculaImage'
})

export class PeliculaImagePipe {

  transform(pelicula: Pelicula): unknown{
    console.log(pelicula)
    if(!pelicula.backdrop_path){
      return 'assets/no-image.jpg'
    }
    return `https://image.tmdb.org/t/p/w1280/${pelicula.backdrop_path}`

  }

}
