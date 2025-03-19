import { Pipe } from "@angular/core";
import { Detalles } from "../../interfaces/detalles.interface";

@Pipe({
  name:'detalleImage'
})

export class DetalleImagePipe{
    transform(poster_path: string | undefined): string {
      return poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'assets/no-image.jpg'
    }
}
