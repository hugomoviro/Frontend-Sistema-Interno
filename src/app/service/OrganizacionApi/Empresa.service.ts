import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService{
    private urlGetEmpresas = 'https://localhost:5001/api/odata/Empresa';
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImZkMGIwZTFiLWQyZjktNDllMC1mYWRhLTA4ZGI0ODNmODBmZiIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTM4MDU5Nn0.Md16Wfy72p0nrBqY6UIUlsZdMWDpVOONgMkpKsttCLs';
    constructor(private http: HttpClient) { }

    public getEmpresas(): Observable<any>{

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(this.urlGetEmpresas, { headers });
      }
}