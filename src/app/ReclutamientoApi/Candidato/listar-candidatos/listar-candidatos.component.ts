import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CandidatoService } from 'src/app/service/ReclutamientoApi/candidato.service';

@Component({
  selector: 'app-listar-candidatos',
  templateUrl: './listar-candidatos.component.html',
  styleUrls: ['./listar-candidatos.component.css']
})
export class ListarCandidatosComponent {
  candidatos: any = {};
  constructor(private apiService: CandidatoService, private router: Router) { }

  ngOnInit(): void {
    this.llenarDatosCandidato();
  }

  llenarDatosCandidato() {
    this.apiService.getCandidato().subscribe(data => {
      this.candidatos = data;
      console.log(this.candidatos)
    });
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/update-candidato/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/delete-candidato/${id}`;
    this.router.navigate([url]);
    console.log(id)
  }

  public redirectToCreate = () => {
    let url: string = `/create-candidatos`;
    this.router.navigate([url]);
  }

  public redirectToHome = () => {
    let url: string = `/`;
    this.router.navigate([url]);
  }
}
