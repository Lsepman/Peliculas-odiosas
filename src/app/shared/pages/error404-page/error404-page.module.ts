import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageRoutingModule } from './error404-page-routing.module';
import { Error404PageComponent } from './error404-page/error404-page.component';


@NgModule({
  declarations: [Error404PageComponent],
  imports: [
    CommonModule,
    Error404PageRoutingModule
  ]
})
export class Error404PageModule { }
