import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepartamentoListComponent } from "../departamento-list/departamento-list.component";
import { DepartamentoCreateComponent } from "../departamento-create/departamento-create.component";
import { DepartamentoUpdateComponent } from "../departamento-update/departamento-update.component";

const routes: Routes = [
    {path : '', component: DepartamentoListComponent},
    {path : 'creardepartamento', component: DepartamentoCreateComponent},
    {path : 'editardepartamento/:id', component: DepartamentoUpdateComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })


export class DepartamentoRoutingModule { }