import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})

export class ErrorHanderService {
    public errorMessage: string = '';
    public dialogConfig!: MatDialogConfig<any>;

    constructor(private router: Router, private dialog: MatDialog) { }

    public handleError = (error: HttpErrorResponse) => {
        if(error.status === 500){
          this.handle500Error(error);
        }
        else if(error.status === 404){
          this.handle404Error(error)
        }
        else if(error.status === 409){
          this.handle409Error(error);
        }
        else{
          this.handleOtherError(error);
        }
      }
     
      private handle500Error = (error: HttpErrorResponse) => {
        this.createErrorMessage(error);
        this.router.navigate(['/500']);
      }
     
      private handle404Error = (error: HttpErrorResponse) => {
        this.createErrorMessage(error);
        this.router.navigate(['/404']);
      }
    
      private handle409Error = (error: HttpErrorResponse) => {
        this.createValidationMessage(error);
        this.dialogConfig.data = { 'errorMessage': this.errorMessage };
        this.dialog.open(ErrorDialogComponent, this.dialogConfig);
      } 
     
      private handleOtherError = (error: HttpErrorResponse) => {
        this.createErrorMessage(error);
        this.dialogConfig.data = { 'errorMessage': this.errorMessage };
        this.dialog.open(ErrorDialogComponent, this.dialogConfig);
      }
     
      private createErrorMessage(error: HttpErrorResponse){
        this.errorMessage = error.error ? error.error : error.statusText;
      }
    
      private createValidationMessage(error: HttpErrorResponse) {
        this.errorMessage = error.error?.message || error.statusText;
      }

    }