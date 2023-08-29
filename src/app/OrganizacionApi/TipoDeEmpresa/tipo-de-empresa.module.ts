import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTipoDeEmpresaComponent } from './listar-tipo-de-empresa/listar-tipo-de-empresa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TipoDeEmpresaRoutingModule } from './tipo-de-empresa-routing/tipo-de-empresa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarTipoDeEmpresaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TipoDeEmpresaRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TipoDeEmpresaModule { }
