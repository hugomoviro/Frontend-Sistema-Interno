import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentoCandidato } from 'src/app/Models/DocumentoCandidato.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentoCandidatoService {
  private getDocumentoCandidato = 'https://localhost:5001/api/odata/documentodelcandidato/'
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmZTQyMjZhLTk3N2EtNDEyOC1jOWM2LTA4ZGI1ZDY1MjA0MCIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTgwMDI4M30.DmX03vzgSU59nJflRcAEnbxd7a7b55bOW3sv8gYwiCI'
  activeRoute: any;
  constructor(private http: HttpClient) { }

  //Obtener todos los documentos de candidatos
  public getDocumentoCandidatos(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(this.getDocumentoCandidato, { headers });
  }

  // Get Documento Candidato By Id
  public getCandidatoById(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(`${this.getDocumentoCandidato}${id}`, { headers });
  }

  //Crear Documento Candidato
  public createDocumentoCandidato(
    DocumentoId: string,
    CandidatoId: string,
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const documentoCandidato = {
      DocumentoId,
      CandidatoId
    };

    return this.http.post<any>(this.getDocumentoCandidato, documentoCandidato, { headers });
  }

  //Eliminar Documento Candidato
  public delete = (id: string): Observable<any> => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const url = `${this.getDocumentoCandidato}${id}`;
    console.log(url)
    return this.http.delete(url, { headers});
  }

  //Update Documento Candidato
  updateDocumentoCandidato(documentoCandidato: DocumentoCandidato): Observable<any> {
    const url: string = `${this.getDocumentoCandidato}${documentoCandidato.Id}`;
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  
    return this.http.put(url, documentoCandidato, { headers });
  }
}