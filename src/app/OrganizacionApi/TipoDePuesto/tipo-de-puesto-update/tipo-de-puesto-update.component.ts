import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDePuesto } from 'src/app/Models/TipoDePuesto.model';

@Component({
  selector: 'app-tipo-de-puesto-update',
  templateUrl: './tipo-de-puesto-update.component.html',
  styleUrls: ['./tipo-de-puesto-update.component.css']
})
export class TipoDePuestoUpdateComponent implements OnInit{
  tipoPuesto: any = {};
  public dataForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TipoDePuestoUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TipoDePuesto
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
