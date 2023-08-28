import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpresasComponent } from './listar-empresas/listar-empresas.component';
import { CreateEmpresaComponent } from './create-empresa/create-empresa.component';
import { DeleteEmpresasComponent } from './delete-empresas/delete-empresas.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListarEmpresasComponent,
    CreateEmpresaComponent,
    DeleteEmpresasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class EmpresaModule { }
