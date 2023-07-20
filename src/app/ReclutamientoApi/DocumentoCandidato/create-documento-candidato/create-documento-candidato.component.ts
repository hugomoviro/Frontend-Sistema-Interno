import { Component } from '@angular/core';
import { DocumentoCandidatoService } from 'src/app/service/ReclutamientoApi/documentoCandidato.service';

@Component({
  selector: 'app-create-documento-candidato',
  templateUrl: './create-documento-candidato.component.html',
  styleUrls: ['./create-documento-candidato.component.css']
})
export class CreateDocumentoCandidatoComponent {
  documentoCandidato = {
    DocumentoId: '',
    CandidatoId: ''
    // Add other candidate attributes here
  };

  constructor(private documentoCandidatoService: DocumentoCandidatoService) { }

  submitForm() {
    this.documentoCandidatoService.createDocumentoCandidato(
      this.documentoCandidato.DocumentoId,
      this.documentoCandidato.CandidatoId
    ).subscribe(
      (response) => {
        console.log('Candidate document created successfully', response);
        // Reset the form after successful submission
        this.documentoCandidato = {
          DocumentoId: '',
          CandidatoId: ''
          // Add other candidate attributes here
        };
        window.location.href = "listar-documento-candidato";

      },
      (error) => {
        console.error('Error creating candidate document', error);
      }
    );
  }

  public onCancel = () => {
    window.location.href = "listar-documento-candidato";
  }
}
