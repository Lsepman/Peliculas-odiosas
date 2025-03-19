import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
   });
  loading = false;
  emailVerificado = false;
  titulo = 'Inicia Sesion';
  showSpinner= false;
  campoPassword = false


  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
    private commonService: CommonService

  ) { }


verificarEmail() {
   if(this.loginForm.get('email')?.invalid){
    this.loginForm.get('email')?.markAllAsTouched();
    return;
   }

   this.loading=true;
   this.showSpinner= true;
    setTimeout(()=>{
      this.loading= false;
      this.showSpinner= false;
      this.campoPassword= true;
    },2000);
  }
   login(){
    if (this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
    }
      this.acceder();
  }

async acceder() {
if(this.loginForm.valid){
const data = this.loginForm.value;
console.log("Intentando iniciar sesion con:", data)
const RESPONSE = await this.authService.doLogin(data).toPromise();

console.log(RESPONSE)
if(RESPONSE.ok){
  if(RESPONSE.data && 'token' in RESPONSE.data){

    this.cookieService.set('token', RESPONSE.data.token);
    localStorage.setItem('token', RESPONSE.data.token);
    localStorage.setItem('usuario', RESPONSE.data.usuario);
    localStorage.setItem('nombre_publico', RESPONSE.data.nombre_publico);
    localStorage.setItem('id_rol', RESPONSE.data.id_rol);
    this.commonService.headers= new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESPONSE.data.token}`
    });
    this.router.navigate(['/peliculas/search']);

  }else if(RESPONSE.data.valido === 0){
    console.warn("No se recibió token en la respuesta.");
    this.snackBar.open('Usuario inhabilitado', 'Cerrar', {duration: 5000});
  }else if(RESPONSE.data.valido === 1){
    this.snackBar.open('Usuario o contraseñas incorrectas', 'Cerrar', {duration:5000});
    this.loginForm.reset();
  }
}
}
}
}


