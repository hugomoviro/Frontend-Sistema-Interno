import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-de-puesto-delete',
  templateUrl: './tipo-de-puesto-delete.component.html',
  styleUrls: ['./tipo-de-puesto-delete.component.css']
})
export class TipoDePuestoDeleteComponent {
  constructor(public dialogRef: MatDialogRef<TipoDePuestoDeleteComponent>) { }

  confirmDelete(){
    this.dialogRef.close('yes');
  }

  ngOnInit(): void {
  }
}
