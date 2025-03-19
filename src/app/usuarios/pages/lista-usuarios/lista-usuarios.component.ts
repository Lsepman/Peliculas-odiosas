import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(
    private servicioUsuarios: UsuarioService,
    private router: Router){}

    usuarios: Usuario[]= [];

  ngOnInit(): void {
   this.getUsuarios();
  }

  async getUsuarios(){
    const RESPONSE = await this.servicioUsuarios.getAllUsuarios().toPromise();
    if(RESPONSE.ok){
      this.servicioUsuarios.usuarios = RESPONSE.data;
    }
  }

  get usuario(){
   return this.servicioUsuarios.usuarios;
  }


}
