import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-departamento-delete',
  templateUrl: './departamento-delete.component.html',
  styleUrls: ['./departamento-delete.component.css']
})
export class DepartamentoDeleteComponent {

  constructor(public dialogRef: MatDialogRef<DepartamentoDeleteComponent>) { }

  confirmDelete(){
    this.dialogRef.close('yes');
  }

  ngOnInit(): void {
  }
}
