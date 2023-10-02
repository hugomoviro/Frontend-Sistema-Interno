import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departamento, Persona, Empresa } from 'src/app/Models/Departamento.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit{

  public nuevoDepartamento!: FormGroup;

  listaDePersonas: Persona[] = [];
  listaDeEmpresas: Empresa[] = [];

  constructor(private router: Router,
              private repository: RepositoryService,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.nuevoDepartamento= new FormGroup ({
      Numero: new FormControl('', [Validators.required]),
      Nombre: new FormControl('', [Validators.required]),
      ResponsableId: new FormControl('', [Validators.required]),
      EmpresaId: new FormControl('', [Validators.required])
    });
    this.getListaDeEmpresas();
    this.getListaDePersonas();
  }

  createDepartamento = (nuevoDepartamentoValue: any) => {
    if (this.nuevoDepartamento.valid) {
      this.executeCreation(nuevoDepartamentoValue);
    }
  }

  executeCreation = (nuevoDepartamentoValue: any) => {
    let newRecord: Departamento = {
      Numero: nuevoDepartamentoValue.Numero,
      Nombre: nuevoDepartamentoValue.Nombre,
      ResponsableId: nuevoDepartamentoValue.ResponsableId,
      EmpresaId: nuevoDepartamentoValue.EmpresaId
    }
    let apiUrl = 'departamento';
    this.repository.create(apiUrl, newRecord)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/departamento']);
      },
      (error => {
        console.log(error);
      })
    )

  }

  public getListaDePersonas = () => {
    let apiAddress: string = "persona";
    this.repository.getData(apiAddress)
      .subscribe((res : any) => {
        this.listaDePersonas = res.value as Persona[];
        console.log('Lista de Personas:',this.listaDePersonas);
      })
  }

  public getListaDeEmpresas = () => {
    let apiAddress: string = "empresa";
    this.repository.getData(apiAddress)
      .subscribe((res : any) => {
        this.listaDeEmpresas = res.value as Empresa[];
        console.log('Lista de Empresas:',this.listaDeEmpresas);
      })
  }

    //Boton de cancelar
    public cancelar = () => {
      this.router.navigate(['/persona']);
    }
}
