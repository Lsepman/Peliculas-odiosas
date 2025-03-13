import { Pipe } from "@angular/core";
import { Detalles } from "../interfaces/detalles.interface";

@Pipe({
  name:'detalleImage'
})

export class DetalleImagePipe{
    transform(pelicula: Detalles): unknown {
      if(!pelicula.id || !pelicula.poster_path){
        return 'assets/no-image.jpg'
      }
      return `https://image.tmdb.org/t/p/w1280/${pelicula.poster_path}`
    }
}
