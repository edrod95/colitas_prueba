import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonacionesComponent } from './donaciones.component';
import { DonacionesRoutingModule } from './donaciones-routing.module';



@NgModule({
  declarations: [
    DonacionesComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule
  ]
})
export class DonacionesModule { }
