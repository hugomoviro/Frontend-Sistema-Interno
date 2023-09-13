import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TipoDePuestoListComponent } from "../tipo-de-puesto-list/tipo-de-puesto-list.component";

const routes: Routes = [
    {path : '', component: TipoDePuestoListComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })
export class TipoDePuestoRoutingModule { }