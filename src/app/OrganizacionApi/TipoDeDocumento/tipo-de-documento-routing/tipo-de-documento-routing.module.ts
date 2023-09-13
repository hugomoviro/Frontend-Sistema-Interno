import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TipoDeDocumentoListComponent } from "../tipo-de-documento-list/tipo-de-documento-list.component";


const routes: Routes = [
    { path : '', component: TipoDeDocumentoListComponent},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })
export class TipoDeDocumentoRoutingModule { }