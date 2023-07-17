import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService{
    private urlGetEmpresas = 'https://localhost:5001/api/odata/Empresa';
    private urlGetEmpresa = 'https://localhost:5001/api/odata/Empresa/'
    private urlGetEmpresasAndTipoDeEmpresas = 'https://localhost:5001/api/odata/Empresa?$expand=TipoDeEmpresa($select=Nombre)';
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImZkMGIwZTFiLWQyZjktNDllMC1mYWRhLTA4ZGI0ODNmODBmZiIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY4OTQ4MzU1MH0.8MM3We8K8nnjJcvgLnCOaYV7WFCvFJxQruplp1Hg0R4';
    constructor(private http: HttpClient, private activeRoute : ActivatedRoute) { }

    public getEmpresas(): Observable<any>{

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(this.urlGetEmpresas, { headers });
      }

      public getEmpresasAndTipoDeEmpresas(): Observable<any>{
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(this.urlGetEmpresasAndTipoDeEmpresas, { headers });
      }

      // Get Empresa By Id
      public getEmpresaById(id: string): Observable<any>{
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(`${this.urlGetEmpresa}${id}`, { headers });
      }

      // Delete Empresa By Id
      public getDeleteRecord = () => {
        let id: string = this.activeRoute.snapshot.params['id'];
        let apiUrl: string = `https://localhost:5001/api/odata/Empresa/?id=` +id;
      }

      public delete = (route: string): Observable<any> => {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.delete(route, { headers});
      }

      public create = (route: string, body: any) => {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
        return this.http.post(route, body, { headers});
      }

}