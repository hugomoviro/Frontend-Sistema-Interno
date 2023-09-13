import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PersonaListComponent } from "../persona-list/persona-list.component";


const routes: Routes = [
    {path : '', component: PersonaListComponent}
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
    })

export class PersonaRoutingModule { }