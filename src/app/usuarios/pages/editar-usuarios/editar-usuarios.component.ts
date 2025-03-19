import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/interfaces/rol';
import { Usuario } from 'src/app/interfaces/usuario';
import { RolesService } from 'src/app/services/roles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CLOSE, INVALID_FORM } from 'src/app/shared/messages';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: []
})
export class EditarUsuariosComponent implements OnInit{

  public usuario? : Usuario;
  listaRoles!: Rol[];
  public editar: boolean = false;

  usuarioForm : FormGroup = new FormGroup({
    id_usuario: new FormControl(null),
    usuario: new FormControl('',[Validators.required, Validators.email]),
    nombre_publico: new FormControl('', [Validators.required]),
    password: new FormControl(null),
    habilitado: new FormControl(null),
    id_rol: new FormControl(''),
    observaciones: new FormControl(''),
    rol: new FormControl('')
  });

  constructor(private servicioRoles: RolesService,
    private servicioUsuario: UsuarioService,
    private route: Router,
    public snackBar: MatSnackBar,
    public activatedRoute: ActivatedRoute,
    ){}



  async ngOnInit(){
    try{
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      await this.getRoles();
      this.getUsuarios();
      this.usuario = this.servicioUsuario.usuarios.find(i => i.id_usuario == id);
          if(this.usuario){
            this.usuarioForm.reset(this.usuario);
            this.editar= true;
          }
        }else{
          await this.getRoles();
        }
      }catch (error){
        console.log('error al obtener el usuario', error);
      }

    }


  async getRoles(){
    const RESPONSE = await this.servicioRoles.getAllRoles().toPromise();
    if(RESPONSE.ok){
      this.listaRoles = RESPONSE.data as Rol[];
    }
  }
  get currentUsuario(): Usuario{
    const usuario= this.usuarioForm.value as Usuario;
    return usuario;
  }

  async getUsuarios(){
   const RESPONSE = await this.servicioUsuario.getAllUsuarios().toPromise();
   if(RESPONSE.ok){
    this.servicioUsuario.usuarios= RESPONSE.data;
   }
  }

  async confirmEdit(){
    if(this.usuarioForm.valid){
      const usuario= this.usuarioForm.value;
      const RESP = await this.servicioUsuario.editUsuario(usuario).toPromise()
      if(RESP.ok){
        this.snackBar.open("Usuario editado con exito", CLOSE, {duration: 5000});
        this.route.navigate(['usuarios/lista-usuarios'])
      }else{
        this.snackBar.open("Usuario NO editado", CLOSE, {duration:5000});
      }
    }else{
      this.snackBar.open(INVALID_FORM, CLOSE, {duration:5000})
    }
  }


  async addUsuario(){
    if(this.usuarioForm.valid){
      const usuario= this.usuarioForm.value;
      const RESP = await this.servicioUsuario.addUsuario(usuario).toPromise()
      if(RESP.ok){
        this.snackBar.open("Usuario creado con exito", CLOSE, {duration: 5000});
        this.route.navigate(['usuarios/lista-usuarios'])
      }else{
        this.snackBar.open("Usuario NO creado", CLOSE, {duration:5000});
      }
    }else{
      this.snackBar.open(INVALID_FORM, CLOSE, {duration:5000})
    }
  }

  async deleteUser() {
    const RESP = await this.servicioUsuario.deleteUsuario(this.usuario!).toPromise();
    if (RESP.ok) {
      this.snackBar.open("Usuario eliminado", CLOSE, { duration: 5000 });
      this.route.navigate(['usuarios/lista-usuarios']);
    } else {
      this.snackBar.open("No se puedo eliminar usuario", CLOSE, { duration: 5000 });
    }
  }



}
