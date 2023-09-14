import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona.model';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { PersonaDeleteComponent } from '../persona-delete/persona-delete.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit{
  personas: any = {};

  
  constructor(
    private repository: RepositoryService,
    private errorService: ErrorHanderService,
    private dialog: MatDialog,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.llenarDatosPersona();
  }

  llenarDatosPersona(){
    let url = 'Persona?$expand=Puesto($select=Descripcion)'
    this.repository.getData(url).subscribe(e => {
      this.personas = e;
      console.log(this.personas)
    });
  }

  deletePersona(id: number | undefined){
    if(id !== undefined)
    {
      const dialogRef = this.dialog.open(PersonaDeleteComponent, {
        width: '400px',
        
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        if(result === 'yes'){
          let url = 'persona/' + id;
          this.repository.delete(url).subscribe(() => {
            console.log('Deleted record:', id);
            this.llenarDatosPersona();
          },
          (error) => {
            if(error.status === 500)
            {
              this.openErrorDialog();
            }
            this.errorService.handleError(error);
            console.log(error);
          }
          )
        }
      });

    }
  }
  openErrorDialog() {
    throw new Error('Method not implemented.');
  }

  //editar
  editPersona(id: number | undefined){
    if (id) {
      let url: string = `persona/editarpersona/${id}`;
      console.log(url);
      this.router.navigate([url]);
    } else {
      console.error('El ID no es una cadena válida.');
    }
  }

  addPersona(){
    let url: string = `persona/crearpersona`;
    this.router.navigate([url]);
  }

}
