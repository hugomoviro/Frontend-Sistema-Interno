import { Component, OnInit, Inject } from '@angular/core';
import { TipoDeEmpresa } from 'src/app/Models/TipoDeEmpresa.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-de-empresa-delete',
  templateUrl: './tipo-de-empresa-delete.component.html',
  styleUrls: ['./tipo-de-empresa-delete.component.css']
})
export class TipoDeEmpresaDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TipoDeEmpresaDeleteComponent>) { }

  confirmDelete(){
    this.dialogRef.close('yes');
  }

  ngOnInit(): void {
  }

}
