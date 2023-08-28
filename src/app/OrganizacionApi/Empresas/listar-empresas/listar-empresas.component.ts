import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/service/OrganizacionApi/Empresa.service';
import { RepositoryService } from 'src/app/shared/repository.service';
@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  empresas: any = {};
 
  constructor(private empresaService: EmpresaService, private router : Router, private repository : RepositoryService) {}

  ngOnInit(): void {
   // this.llenarDatosEmpresa();
  this.llenarDatosEmpresaCompleto();
  }

  llenarDatosEmpresa(){
    let url = 'Empresa'
    this.repository.getData(url).subscribe(e => {
      this.empresas = e;
      console.log(this.empresas)
    });
    this.empresaService.getEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }

  llenarDatosEmpresaCompleto(){
    let url = 'Empresa?$expand=TipoDeEmpresa($select=Nombre)'
    this.repository.getData(url).subscribe(e => {
      this.empresas = e;
      console.log(this.empresas)
    });
  }

  public redirectToUpdate = (id: any) => {
    let url: string = `/empresas/update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: any) => {
    let url: string = `/delete-empresa/${id}`;
    this.router.navigate([url]);
  }

  public redirectToCreate = () => {
    let url: string = `/create-empresa`;
    this.router.navigate([url]);
}

}