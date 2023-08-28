import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentoCandidatoService } from 'src/app/service/ReclutamientoApi/documentoCandidato.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-documento-candidato',
  templateUrl: './update-documento-candidato.component.html',
  styleUrls: ['./update-documento-candidato.component.css']
})
export class UpdateDocumentoCandidatoComponent {
  constructor(private DocumentoCandidatoService: DocumentoCandidatoService, private activeRoute: ActivatedRoute,) { }
  documentoCandidato: any = {};
  private id: string = this.activeRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.llenarDatosDocumentoCandidato();
  }

  llenarDatosDocumentoCandidato() {
    this.DocumentoCandidatoService.getCandidatoById(this.id).subscribe(e => {
      this.documentoCandidato = e;
      console.log(this.documentoCandidato)
    });
  }

  public updateDocumentoCandidato(): void {
    const subscription: Subscription = this.DocumentoCandidatoService.updateDocumentoCandidato(this.documentoCandidato).subscribe({
      next: () => {
        console.log('Documento de candidato actualizado');
        // Realiza cualquier otra acción necesaria después de actualizar el candidato
        // Por ejemplo, redireccionar a otra página o mostrar una notificación de éxito
      },
      error: (error) => {
        console.error('Error al actualizar el documento de candidato:', error);
        // Manejar el error de actualización, por ejemplo, mostrar un mensaje de error al usuario
      },
      complete: () => {
        // Este bloque se ejecutará cuando la operación se complete, si es necesario
        window.location.href = "listar-documento-candidato";
      }
    });
  }

  public onCancel = () => {
    window.location.href = "listar-documento-candidato";
  }
}
