import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CandidatoService } from 'src/app/service/ReclutamientoApi/candidato.service';

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.css']
})
export class ListarCandidatosComponent {
  candidatos: any = {};

  constructor(private apiService: CandidatoService) {}

  ngOnInit(): void {
    this.llenarDatosCandidato();
  }

  llenarDatosCandidato(){
    this.apiService.getCandidato().subscribe(data =>{
      this.candidatos = data;
      console.log(this.candidatos)
    });
  }
}
