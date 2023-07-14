import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  empresas: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarDatosEmpresa();
  }

  llenarDatosEmpresa(){
    this.apiService.getEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }
  
}
