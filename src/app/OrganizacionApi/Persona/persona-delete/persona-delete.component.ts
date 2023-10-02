import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-persona-delete',
  templateUrl: './persona-delete.component.html',
  styleUrls: ['./persona-delete.component.css']
})
export class PersonaDeleteComponent implements OnInit{
  
    constructor(public dialogRef: MatDialogRef<PersonaDeleteComponent>) { }
  
    confirmDelete(){
      this.dialogRef.close('yes');
    }
  
    ngOnInit(): void {
    }
}
