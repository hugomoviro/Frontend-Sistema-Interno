import { Component } from '@angular/core';
import { Candidato } from '../../../Models/Candidato.model';
import { CandidatoService } from '../../../service/ReclutamientoApi/candidato.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-candidatos',
  templateUrl: './update-candidatos.component.html',
  styleUrls: ['./update-candidatos.component.css']
})
export class UpdateCandidatosComponent {
  constructor(private candidatoService: CandidatoService, private activeRoute: ActivatedRoute,) { }
  candidato: any = {};
  private id: string = this.activeRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.llenarDatosCandidato();
  }

  llenarDatosCandidato() {
    this.candidatoService.getCandidatoById(this.id).subscribe(e => {
      this.candidato = e;
      console.log(this.candidato)
    });
  }

  public updateCandidato(): void {
    const subscription: Subscription = this.candidatoService.updateCandidato(this.candidato).subscribe({
      next: () => {
        console.log('Candidato actualizado');
        // Realiza cualquier otra acción necesaria después de actualizar el candidato
        // Por ejemplo, redireccionar a otra página o mostrar una notificación de éxito
      },
      error: (error) => {
        console.error('Error al actualizar el candidato:', error);
        // Manejar el error de actualización, por ejemplo, mostrar un mensaje de error al usuario
      },
      complete: () => {
        // Este bloque se ejecutará cuando la operación se complete, si es necesario
        window.location.href = "listar-candidatos";
      }
    });
  }

  public onCancel = () => {
    window.location.href = "listar-candidatos";
  }

}
