import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CLOSE } from 'src/app/shared/messages';

@Component({
  selector: 'app-card-usuarios',
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.css']
})
export class CardUsuariosComponent implements OnInit {

  @Input() public usuario! : Usuario;


  public listaUsuarios: Usuario[] = []

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void{
    if(!this.usuario) throw new Error('Usuario Property is required')
  }

 async eliminarUsuario(){
  if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
    return;
  }
    const RESP = await this.usuarioService.deleteUsuario(this.usuario).toPromise();
    if(RESP.ok){
      this.snackBar.open('Usuario eliminado con exito', CLOSE, {duration: 5000});
    }else{
    this.snackBar.open('No se pudo eliminar usuario', CLOSE, {duration: 5000})
  }
}




}
