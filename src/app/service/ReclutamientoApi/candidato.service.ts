import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private getCandidatos = 'https://localhost:5001/api/odata/Candidato'
  constructor(private http: HttpClient) { }

  public getCandidato(): Observable<any>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmZTQyMjZhLTk3N2EtNDEyOC1jOWM2LTA4ZGI1ZDY1MjA0MCIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTYxNjczOH0.0ULcWSExRRH_CQegEjWuWWtO8Me61OFtbnFvUroJB-o'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.getCandidatos, { headers });
  }

  public createCandidato(
    EstatusCandidadoId: string,
    AniosTrabajando: number,
    PrestacionesEsperadas: string,
    ModalidadDeTrabajoId: number,
    ExpectativaSalarialNeta: number,
    CostoTotalAnual: number,
    NivelDeInglesId: number,
    ComentarioEntrevista: string,
    UltimoGradoDeEstudios: string,
    SaldoActual: number,
    CorreoPersonal: string,
    Direccion: string,
    FechaDelNacimiento: string,
    Nombre: string,
    Telefono: string
  ): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmZTQyMjZhLTk3N2EtNDEyOC1jOWM2LTA4ZGI1ZDY1MjA0MCIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTYxNjczOH0.0ULcWSExRRH_CQegEjWuWWtO8Me61OFtbnFvUroJB-o'

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const candidato = {
      EstatusCandidadoId,
      AniosTrabajando,
      PrestacionesEsperadas,
      ModalidadDeTrabajoId,
      ExpectativaSalarialNeta,
      CostoTotalAnual,
      NivelDeInglesId,
      ComentarioEntrevista,
      UltimoGradoDeEstudios,
      SaldoActual,
      CorreoPersonal,
      Direccion,
      FechaDelNacimiento,
      Nombre,
      Telefono
    };

    return this.http.post<any>(this.getCandidatos, candidato, { headers });
  }
}