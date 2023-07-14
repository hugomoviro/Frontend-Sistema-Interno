import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://rickandmortyapi.com/api/character/1,183'
  private urlApiOrganizacion = 'https://localhost:5001/api/odata/Empresa'
  constructor(private http: HttpClient) { }

  public getData() : Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public getEmpresas(): Observable<any>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImZkMGIwZTFiLWQyZjktNDllMC1mYWRhLTA4ZGI0ODNmODBmZiIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTM2ODA2Mn0.9VSoBVDQI2ylR7WIuY0JaIUxuWpRF2uBUzFD9Au3BtI'; // Reemplaza con tu token válido

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get<any>(this.urlApiOrganizacion, { headers });
  }
}
