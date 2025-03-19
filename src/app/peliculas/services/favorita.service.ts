import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { CommonService } from 'src/app/shared/common.service';
import { URL_API } from "src/environment/environments";

const ENDPOINT = 'favorito.php';

@Injectable({
  providedIn: 'root'
})
export class FavoritaService {


  favoritos: number[] = [];

  constructor(private http: HttpClient, private commonService: CommonService, private snackBar: MatSnackBar){}

  get(token: string) {
    const encodedToken = encodeURIComponent(token); // Codificar el token
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}?token=${encodedToken}`, {
      headers: this.commonService.headers
    });
  }

  addPelicula(token: string, id: number): Observable<ApiResponse>{
    const body = { id_pelicula: id, token_sesion: token }; // <-- 'token_sesion' CORRECTO
    return this.http.post<ApiResponse>(`${URL_API}/${ENDPOINT}`, body, {headers: this.commonService.headers})
  }

  deletePelicula(token: string, id: number): Observable<ApiResponse>{
    const body = { id_pelicula: id, token_sesion: token }; // <-- 'token_sesion' CORRECTO
    return this.http.request<ApiResponse>('DELETE', `${URL_API}/${ENDPOINT}`, {
      body,
      headers: this.commonService.headers
    });
  }

  async aniadirPelicula(id: number){
    const token = localStorage.getItem('token');
    if (!token) {
    console.error("Error: No se encontró el token en localStorage");
    return false;
    }
    const RESPONSE = await this.addPelicula(token, id).toPromise();
    return RESPONSE.ok;
}



  async eliminarPelicula(id: number){
    const token = localStorage.getItem('token');
  if (!token) {
    console.error("Error: No se encontró el token en localStorage");
    return false;
  }
  const RESPONSE = await this.deletePelicula(token, id).toPromise();
  return RESPONSE.ok;
}

  }



