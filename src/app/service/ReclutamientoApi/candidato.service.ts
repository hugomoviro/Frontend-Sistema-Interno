import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/Models/Candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private getCandidatos = 'https://localhost:5001/api/odata/Candidato/'
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmZTQyMjZhLTk3N2EtNDEyOC1jOWM2LTA4ZGI1ZDY1MjA0MCIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY5MzU5NzkxM30.y7TUg1QjaxkJr1ovCai5tZtLbrDKj5j-fHWV_Mp54z0'
  activeRoute: any;
  constructor(private http: HttpClient) { }

  //Obtener todos los candidatos
  public getCandidato(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(this.getCandidatos, { headers });
  }

  // Get Candidato By Id
  public getCandidatoById(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(`${this.getCandidatos}${id}`, { headers });
  }

  //Crear Candidato
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
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
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

  //Eliminar Candidato
  public getDeleteRecord = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `https://localhost:5001/api/odata/Candidato/` + id;
  }

  public delete = (id: string): Observable<any> => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const url = `https://localhost:5001/api/odata/Candidato/${id}`;
    console.log(url)
    return this.http.delete(url, { headers});
  }

  //Update Candidato
  updateCandidato(candidato: Candidato): Observable<any> {
    const url: string = `https://localhost:5001/api/odata/Candidato/${candidato.Id}`;
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.http.put(url, candidato, { headers });
  }
}