import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonaListComponent } from "../../Persona/persona-list/persona-list.component";
import { PersonaCreateComponent } from "../../Persona/persona-create/persona-create.component";
import { PersonaUpdateComponent } from "../../Persona/persona-update/persona-update.component";

const routes: Routes = [
    {path : '', component: PersonaListComponent},
    {path : 'crearpersona', component: PersonaCreateComponent},
    {path : 'editarpersona/:id', component: PersonaUpdateComponent}
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