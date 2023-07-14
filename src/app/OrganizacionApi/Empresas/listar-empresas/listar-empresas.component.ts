import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/OrganizacionApi/Empresa.service';


@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  empresas: any = {};

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.llenarDatosEmpresa();
  }

  llenarDatosEmpresa(){
    this.empresaService.getEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }


  
}
