import { Component } from '@angular/core';
import { DocumentoCandidatoService } from 'src/app/service/ReclutamientoApi/documentoCandidato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-documento-candidato',
  templateUrl: './listar-documento-candidato.component.html',
  styleUrls: ['./listar-documento-candidato.component.css']
})
export class ListarDocumentoCandidatoComponent {
  documentoCandidato: any = {};
  constructor(private apiService: DocumentoCandidatoService, private router: Router) { }

  ngOnInit(): void {
    this.llenarDatosDocuementoCandidato();
  }

  llenarDatosDocuementoCandidato() {
    this.apiService.getDocumentoCandidatos().subscribe(data => {
      this.documentoCandidato = data;
      console.log(this.documentoCandidato)
    });
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/update-documento-candidato/${id}`;
    this.router.navigate([url]);
  }

  public redirectToDelete = (id: string) => {
    let url: string = `/delete-documento-candidato/${id}`;
    this.router.navigate([url]);
   }

  public redirectToCreate = () => {
    let url: string = `/create-documento-candidato`;
    this.router.navigate([url]);
  }

  public redirectToHome = () => {
    let url: string = `/`;
    this.router.navigate([url]);
  }
}
