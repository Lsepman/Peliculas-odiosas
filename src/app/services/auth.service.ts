import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiResponse} from '../interfaces/api-response';
import { URL_API } from 'src/environment/environments';
import { CommonService } from '../shared/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService, private commonService: CommonService) {}

  doLogin(data: any) {

    const body = JSON.stringify(data);
    return this.http.post<ApiResponse>(`${URL_API}/login.php`, body);
  }

  public async isAuthenticated(url: string): Promise<boolean> {

    let rutaSeleccionada: string;
    const promise = new Promise<boolean>((resolve, reject) => {
      rutaSeleccionada = url.substring(1);
      rutaSeleccionada = rutaSeleccionada.split('/')[0];
      this.http.get<ApiResponse>(`${URL_API}/check_usuarios.php?ruta=${ rutaSeleccionada }`,  { headers: this.commonService.getHeaders() } )
      .subscribe((response: ApiResponse) => {
      resolve(response.ok);
      });
    });
    return promise;
  }

  doLogout() {
    const body = new FormData();
    const usuario = localStorage.getItem('usuario') || '';
    body.append('user', usuario);
    this.cookieService.deleteAll();
    localStorage.clear();
    return this.http.post(`${URL_API}/logout.php`, body);
  }

  checkPassToken(tokenPasswd: string) {

    const body = JSON.stringify({ token: tokenPasswd });

    return this.http.post<ApiResponse>(`${URL_API}/check_token_passwd.php`, body);
  }

  generateNewPass(data: any) {
    const body = JSON.stringify(data);

    return this.http.put<ApiResponse>(`${URL_API}/reset_pass.php`, body);

  }

}

