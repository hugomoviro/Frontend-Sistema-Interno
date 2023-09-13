import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TipoDePuestoRoutingModule } from './tipo-de-puesto-routing/tipo-de-puesto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TipoDePuestoListComponent } from './tipo-de-puesto-list/tipo-de-puesto-list.component';
import { TipoDePuestoUpdateComponent } from './tipo-de-puesto-update/tipo-de-puesto-update.component';
import { TipoDePuestoDeleteComponent } from './tipo-de-puesto-delete/tipo-de-puesto-delete.component';


@NgModule({
  declarations: [
    TipoDePuestoListComponent,
    TipoDePuestoUpdateComponent,
    TipoDePuestoDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TipoDePuestoRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ]
})
export class TipoDePuestoModule { }
