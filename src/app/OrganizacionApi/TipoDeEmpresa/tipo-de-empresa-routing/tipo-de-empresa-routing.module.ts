import { CommonModule } from "@angular/common";
import { ListarTipoDeEmpresaComponent } from "../listar-tipo-de-empresa/listar-tipo-de-empresa.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const routes: Routes = [
    { path : '', component: ListarTipoDeEmpresaComponent},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })
export class TipoDeEmpresaRoutingModule { }