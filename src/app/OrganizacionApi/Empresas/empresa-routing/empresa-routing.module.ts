import { Routes, RouterModule } from "@angular/router";
import { ListarEmpresasComponent } from "../listar-empresas/listar-empresas.component";
import { NgModule } from "@angular/core";
import { CreateEmpresaComponent } from "../create-empresa/create-empresa.component";
import { DeleteEmpresasComponent } from "../delete-empresas/delete-empresas.component";
import { CommonModule } from "@angular/common";


const routes: Routes = [
    { path : '', component: ListarEmpresasComponent},
    { path: 'create', component: CreateEmpresaComponent},
    { path: 'delete/:id', component: DeleteEmpresasComponent},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })
export class EmpresaRoutingModule { }