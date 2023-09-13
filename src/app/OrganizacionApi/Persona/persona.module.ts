import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaUpdateComponent } from './persona-update/persona-update.component';
import { PersonaDeleteComponent } from './persona-delete/persona-delete.component';



@NgModule({
  declarations: [
    PersonaListComponent,
    PersonaUpdateComponent,
    PersonaDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonaModule { }
