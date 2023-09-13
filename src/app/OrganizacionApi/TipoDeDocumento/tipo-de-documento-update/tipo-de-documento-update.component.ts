import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeDocumento } from 'src/app/Models/TipoDeDocumento.model';

@Component({
  selector: 'app-tipo-de-documento-update',
  templateUrl: './tipo-de-documento-update.component.html',
  styleUrls: ['./tipo-de-documento-update.component.css']
})
export class TipoDeDocumentoUpdateComponent implements OnInit{
  tipoDocumento: any = {};
  public dataForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TipoDeDocumentoUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TipoDeDocumento
    ) { }

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
