import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-de-documento-delete',
  templateUrl: './tipo-de-documento-delete.component.html',
  styleUrls: ['./tipo-de-documento-delete.component.css']
})
export class TipoDeDocumentoDeleteComponent {
  constructor(public dialogRef: MatDialogRef<TipoDeDocumentoDeleteComponent>) { }

  confirmDelete(){
    this.dialogRef.close('yes');
  }

  ngOnInit(): void {
  }
}
