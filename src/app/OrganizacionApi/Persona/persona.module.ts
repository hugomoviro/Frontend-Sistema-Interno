import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaUpdateComponent } from './persona-update/persona-update.component';
import { PersonaDeleteComponent } from './persona-delete/persona-delete.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonaRoutingModule } from './persona-routing/persona-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonaCreateComponent } from './persona-create/persona-create.component';



@NgModule({
  declarations: [
    PersonaListComponent,
    PersonaUpdateComponent,
    PersonaDeleteComponent,
    PersonaCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonaRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ]
})
export class PersonaModule { }
