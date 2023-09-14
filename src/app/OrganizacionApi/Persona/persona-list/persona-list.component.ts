import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/Models/Persona.model';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';

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
    private dialog: MatDialog
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
    // Aquí iría tu lógica para eliminar la persona
  }
}
