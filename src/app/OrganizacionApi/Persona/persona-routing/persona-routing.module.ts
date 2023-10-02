import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PersonaListComponent } from "../persona-list/persona-list.component";
import { PersonaCreateComponent } from "../persona-create/persona-create.component";
import { PersonaUpdateComponent } from "../persona-update/persona-update.component";


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

export class PersonaRoutingModule { }