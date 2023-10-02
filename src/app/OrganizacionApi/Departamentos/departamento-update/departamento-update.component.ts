import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento, Persona, Empresa } from 'src/app/Models/Departamento.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-departamento-update',
  templateUrl: './departamento-update.component.html',
  styleUrls: ['./departamento-update.component.css']
})
export class DepartamentoUpdateComponent {
  public departamentoForm!: FormGroup;
  public listaDePersonas: Persona[] = [];
  public listaDeEmpresas: Empresa[] = [];
  public departamentoId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repository: RepositoryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.departamentoForm = new FormGroup({
      Numero: new FormControl('', [Validators.required]),
      Nombre: new FormControl('', [Validators.required]),
      ResponsableId: new FormControl('', [Validators.required]),
      EmpresaId: new FormControl('', [Validators.required])
    });

    this.getRecordById();
    this.getListaDeEmpresas();
    this.getListaDePersonas();
  }

  getDepartamentoDetails = (id: number) => {
    let url = `departamento/${id}`;
    this.repository.getData(url)
      .subscribe((res: any) => {
        const departamento: Departamento = res as Departamento;
        this.departamentoForm.patchValue(departamento);
      });
  }

  getRecordById = () =>{
    let id: string = this.route.snapshot.params["id"];
    let getByIDUrl: string = 'departamento/'+id;
    this.repository.getData(getByIDUrl)
    .subscribe(res => {
      this.departamentoForm.patchValue(res);
    },
    (error) =>{
      this.dialog.open(error.message);
    })
  }

  private update = (departamentoForm : any) => {
    if(this.departamentoForm.valid){
      this.updateDepartamento(departamentoForm);
    }
  }

  updateDepartamento = (departamentoForm : any) => {
    let id: string = this.route.snapshot.params["id"];
    let updateUrl: string = 'departamento/'+id;
    this.repository.update(updateUrl, departamentoForm)
    .subscribe(res => {
      this.router.navigate(['/departamento']);
    },
    (error => {
      console.log(error.message);
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


  public cancelar = () => {
    this.router.navigate(['/persona']);
  }


}
