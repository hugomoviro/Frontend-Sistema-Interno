import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { DepartamentoDeleteComponent } from '../departamento-delete/departamento-delete.component';

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
    let url = 'Departamento?$expand=Persona($select=Nombre),Empresa($select=Nombre)';
    this.repository.getData(url).subscribe(e => {
      this.departamentos = e;
      console.log(this.departamentos)
    });
  }

  deleteDepartamento(id: number | undefined){
    if(id !== undefined)
    {
      const dialogRef = this.dialog.open(DepartamentoDeleteComponent, {
        width: '400px',
        
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        if(result === 'yes'){
          let url = 'departamento/' + id;
          this.repository.delete(url).subscribe(() => {
            console.log('Deleted record:', id);
            this.llenarDatosDepartamento();
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
      let url: string = `departamento/editardepartamento/${id}`;
      console.log(url);
      this.router.navigate([url]);
    } else {
      console.error('El ID no es una cadena válida.');
    }
  }

  addDepartamento(){
    this.router.navigate(['departamento/creardepartamento']);
  }
}
