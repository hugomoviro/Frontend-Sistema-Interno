import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  empresas: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.llenarData()
    this.llenarDatosEmpresa();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
  }

  llenarDatosEmpresa(){
    this.apiService.getEmpresas().subscribe(data =>{
      this.data = data;
      console.log(this.data)
    });
  }

  redireccionarAListarEmpresas() {
    this.router.navigate(['/listar-empresas']);
  }
}
