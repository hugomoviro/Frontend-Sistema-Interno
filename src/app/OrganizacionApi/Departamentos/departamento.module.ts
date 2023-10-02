import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';
import { DepartamentoCreateComponent } from './departamento-create/departamento-create.component';
import { DepartamentoUpdateComponent } from './departamento-update/departamento-update.component';
import { DepartamentoDeleteComponent } from './departamento-delete/departamento-delete.component';


@NgModule({
    declarations: [
    DepartamentoListComponent,
    DepartamentoCreateComponent,
    DepartamentoUpdateComponent,
    DepartamentoDeleteComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
    ]
    })

export class DepartamentoModule { }