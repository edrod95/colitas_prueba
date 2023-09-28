import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstalacionesComponent } from './instalaciones.component';
import { InstalacionesRoutingModule } from './instalaciones-routing.module';



@NgModule({
  declarations: [
    InstalacionesComponent
  ],
  imports: [
    CommonModule,
    InstalacionesRoutingModule
  ]
})
export class InstalacionesModule { }
