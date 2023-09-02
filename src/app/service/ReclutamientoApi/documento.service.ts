import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DocumentoService {
    private urlGetDocumentos = 'https://localhost:5001/api/odata/Documento';
    private urlGetDocumento = 'https://localhost:5001/api/odata/Documento/'
    //private urlGetEmpresasAndTipoDeEmpresas = 'https://localhost:5001/api/odata/Empresa?$expand=TipoDeEmpresa($select=Nombre)';
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmZTQyMjZhLTk3N2EtNDEyOC1jOWM2LTA4ZGI1ZDY1MjA0MCIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVbkpNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTY5MzYxMDU5OX0.tQbHq0-_ogEn5Tmvgrrf-QSAkNTBodPTdhxTvxoSwHo';
    constructor(private http: HttpClient, private activeRoute: ActivatedRoute) { }

    public getDocumentos(): Observable<any> {

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(this.urlGetDocumentos, { headers });
    }

    //  Para sacar dos tipos de datos diferentes
    // public getEmpresasAndTipoDeEmpresas(): Observable<any>{
    //     const headers = new HttpHeaders({
    //       'Authorization': `Bearer ${this.token}`
    //     });
    //     return this.http.get<any>(this.urlGetEmpresasAndTipoDeEmpresas, { headers });
    //   }

    //Get Empresa By Id
    public getDocuemntoById(id: string): Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.get<any>(`${this.urlGetDocumento}${id}`, { headers });
    }

    // Delete Empresa By Id
    public getDeleteRecord = () => {
        let id: string = this.activeRoute.snapshot.params['id'];
        let apiUrl: string = `https://localhost:5001/api/odata/Empresa/?id=` + id;
    }

    public delete = (route: string): Observable<any> => {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.delete(route, { headers });
    }

    public create = (route: string, body: any) => {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`
        });
        return this.http.post(route, body, { headers });
    }
}