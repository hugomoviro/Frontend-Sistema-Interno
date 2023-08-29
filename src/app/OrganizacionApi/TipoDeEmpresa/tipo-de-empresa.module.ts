import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTipoDeEmpresaComponent } from './listar-tipo-de-empresa/listar-tipo-de-empresa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TipoDeEmpresaRoutingModule } from './tipo-de-empresa-routing/tipo-de-empresa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TipoDeEmpresaDeleteComponent } from './tipo-de-empresa-delete/tipo-de-empresa-delete.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListarTipoDeEmpresaComponent,
    TipoDeEmpresaDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TipoDeEmpresaRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class TipoDeEmpresaModule { }
