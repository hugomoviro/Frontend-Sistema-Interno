import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent {
  departamentos: any = {};

  constructor(
    private repository: RepositoryService,
    private errorService: ErrorHanderService,
    private dialog: MatDialog,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.llenarDatosDepartamento();
  }

  llenarDatosDepartamento(){
    let url = 'Departamento?$expand=Persona($select=Nombre)'
    this.repository.getData(url).subscribe(e => {
      this.departamentos = e;
      console.log(this.departamentos)
    });
  }

  // TODO: Delete this method

  //editar
  editPersona(id: number | undefined){
    if (id) {
      let url: string = `departamento/editardepartamento/${id}`;
      console.log(url);
      this.router.navigate([url]);
    } else {
      console.error('El ID no es una cadena válida.');
    }
  }

  addDepartamento(){
    this.router.navigate(['/creardepartamento']);
  }
}
