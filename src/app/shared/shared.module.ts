import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../material/material.module';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule
  ],
  exports: [
    MatButtonModule,
    MaterialModule
  ]
})
export class SharedModule { }
