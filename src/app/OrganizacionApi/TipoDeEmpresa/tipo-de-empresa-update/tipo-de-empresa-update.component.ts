import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoDeEmpresa } from 'src/app/Models/TipoDeEmpresa.model';


@Component({
  selector: 'app-tipo-de-empresa-update',
  templateUrl: './tipo-de-empresa-update.component.html',
  styleUrls: ['./tipo-de-empresa-update.component.css']
})
export class TipoDeEmpresaUpdateComponent implements OnInit
{
    tipoEmpresa: any = {};
    public dataForm!: FormGroup;

    constructor(
      public dialogRef: MatDialogRef<TipoDeEmpresaUpdateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: TipoDeEmpresa
    ) {}
    
    confirmUpdate(){
      if (this.dataForm.valid) {
        const updatedData = {
          Nombre: this.dataForm.value.Nombre
        };
        console.log('Updated Data:', updatedData);
        this.dialogRef.close(updatedData);
      }
    }
  
    ngOnInit(): void {
      this.dataForm = new FormGroup({
        Nombre: new FormControl(this.data.Nombre, [Validators.required]),
      });
    }

}
