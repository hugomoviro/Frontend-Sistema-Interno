import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/service/OrganizacionApi/Empresa.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  empresas: any = {};
 
  constructor(private empresaService: EmpresaService, private router : Router) {}

  ngOnInit(): void {
   // this.llenarDatosEmpresa();
  this.llenarDatosEmpresaCompleto();
  }

  llenarDatosEmpresa(){
    this.empresaService.getEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }

  llenarDatosEmpresaCompleto(){
    this.empresaService.getEmpresasAndTipoDeEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/empresas/update/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/delete-empresa/${id}`;
    this.router.navigate([url]);
  }  
}

