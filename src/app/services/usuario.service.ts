import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../shared/common.service";
import { ApiResponse } from "../interfaces/api-response";
import { URL_API } from "src/environment/environments";
import { Observable } from "rxjs";

const ENDPOINT = 'usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [];

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  getUsuarioById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php?id=${id}`, { headers: this.commonService.headers });
  }

  getAllUsuarios(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
  }

  addUsuario(usuario: Usuario): Observable<ApiResponse> {
    const body = JSON.stringify(usuario);
    return this.http.post<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, body, {headers: this.commonService.headers });
  }

  editUsuario(usuario: Usuario, route?: string): Observable<ApiResponse>  {
    const body = JSON.stringify(usuario);

    if (route) {
      route = `?route=${route}`;
    } else {
      route = '';
    }

    return this.http.put<ApiResponse>(`${URL_API}/${ENDPOINT}.php${route}`, body, { headers: this.commonService.headers });
  }

  deleteUsuario(usuario: Usuario): Observable<ApiResponse>  {
    return this.http.delete<ApiResponse>(`${URL_API}/${ENDPOINT}.php?id=${usuario.id_usuario}`, { headers: this.commonService.headers });
  }

  removeUsuario(idUser: string): void {
    this.usuarios = this.usuarios.filter(usuario => usuario.id_usuario !== idUser);
  }

}
