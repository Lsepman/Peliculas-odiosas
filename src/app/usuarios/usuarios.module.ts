import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { CardUsuariosComponent } from './components/card-usuarios/card-usuarios.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    EditarUsuariosComponent,
    CardUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatCardModule,
    MaterialModule

  ]
})
export class UsuariosModule { }
