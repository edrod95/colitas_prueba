import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';
import { ContactanosRoutingModule } from './contactanos-routing.module';



@NgModule({
  declarations: [
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule
  ]
})
export class ContactanosModule { }
