import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoDeDocumentoListComponent } from './tipo-de-documento-list/tipo-de-documento-list.component';
import { TipoDeDocumentoDeleteComponent } from './tipo-de-documento-delete/tipo-de-documento-delete.component';
import { TipoDeDocumentoUpdateComponent } from './tipo-de-documento-update/tipo-de-documento-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TipoDeDocumentoRoutingModule } from './tipo-de-documento-routing/tipo-de-documento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TipoDeDocumentoListComponent,
    TipoDeDocumentoDeleteComponent,
    TipoDeDocumentoUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TipoDeDocumentoRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
    
  ]
})
export class TipoDeDocumentoModule { }
