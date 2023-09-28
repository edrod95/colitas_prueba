import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './publicaciones.component';
import { PublicacionesRoutingModule } from './publicaciones-routing.module';



@NgModule({
  declarations: [
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
