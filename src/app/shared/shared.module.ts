import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page/error404-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],

})
export class SharedModule { }
