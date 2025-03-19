import { Pipe, PipeTransform } from "@angular/core";
import { Pelicula } from "../../interfaces/pelicula.interface";
import { Detalles } from '../../interfaces/detalles.interface';

@Pipe({
  name: 'peliculaImage'
})

export class PeliculaImagePipe {

  transform(backdropPath: string | undefined): string{
      return backdropPath ? `https://image.tmdb.org/t/p/w500/${backdropPath}` : 'assets/no-image.jpg';

  }

}
