import { Component } from '@angular/core';
import { CandidatoService } from '../../../service/ReclutamientoApi/candidato.service';

@Component({
  selector: 'app-create-candidatos',
  templateUrl: './create-candidatos.component.html',
  styleUrls: ['./create-candidatos.component.css']
})
export class CreateCandidatosComponent {
  candidato = {
    EstatusCandidadoId: '',
    AniosTrabajando: 0,
    PrestacionesEsperadas: '',
    ModalidadDeTrabajoId: 0,
    ExpectativaSalarialNeta: 0.0,
    CostoTotalAnual: 0.0,
    NivelDeInglesId: 0,
    ComentarioEntrevista: '',
    UltimoGradoDeEstudios: '',
    SaldoActual: 0.0,
    CorreoPersonal: '',
    Direccion: '',
    FechaDelNacimiento: '',
    Nombre: '',
    Telefono: ''
    // Add other candidate attributes here
  };

  constructor(private candidatoService: CandidatoService) {}

  submitForm() {
    this.candidatoService.createCandidato(
      this.candidato.EstatusCandidadoId,
      this.candidato.AniosTrabajando,
      this.candidato.PrestacionesEsperadas,
      this.candidato.ModalidadDeTrabajoId,
      this.candidato.ExpectativaSalarialNeta,
      this.candidato.CostoTotalAnual,
      this.candidato.NivelDeInglesId,
      this.candidato.ComentarioEntrevista,
      this.candidato.UltimoGradoDeEstudios,
      this.candidato.SaldoActual,
      this.candidato.CorreoPersonal,
      this.candidato.Direccion,
      this.candidato.FechaDelNacimiento,
      this.candidato.Nombre,
      this.candidato.Telefono
    ).subscribe(
      (response) => {
        console.log('Candidate created successfully', response);
        // Reset the form after successful submission
        this.candidato = {
          EstatusCandidadoId: '',
          AniosTrabajando: 0,
          PrestacionesEsperadas: '',
          ModalidadDeTrabajoId: 0,
          ExpectativaSalarialNeta: 0.0,
          CostoTotalAnual: 0,
          NivelDeInglesId: 0,
          ComentarioEntrevista: '',
          UltimoGradoDeEstudios: '',
          SaldoActual: 0.0,
          CorreoPersonal: '',
          Direccion: '',
          FechaDelNacimiento: '',
          Nombre: '',
          Telefono: ''
          // Add other candidate attributes here
        };
      },
      (error) => {
        console.error('Error creating candidate', error);
      }
    );
  }
}
