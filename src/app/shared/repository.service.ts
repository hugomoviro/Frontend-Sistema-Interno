import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
export class RepositoryService{
   
    constructor(private http: HttpClient){}

    public getData = (route: string) =>
    {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.token}`
        });
        return this.http.get(this.createCompleteRoute(route, environment.urlAddress), {headers});
    }

    public getDataAsync = (route: string) =>
    {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.token}`
        });
        return this.http.get(this.createCompleteRoute(route, environment.urlAddress), {headers}).toPromise();
    }

    public create = (route: string, body: any) => {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.token}`
        });
        return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, {headers})
                   .pipe(
                       catchError((error) => {
                           throw error; 
                       })
                   );
    }
    
    public update = (route: string, body: any) => {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.token}`}
        );
        return this.http.patch(this.createCompleteRoute(route, environment.urlAddress), body, {headers})
        .pipe(
            catchError((error) => {
                console.log(error);
                throw error;
            })
        );
    }

    public delete = (route: string) => {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${environment.token}`
        });
        return this.http.delete(this.createCompleteRoute(route, environment.urlAddress), {headers})
        .pipe(
            catchError((error) => {
                throw error;
            })
        );
    }

    private createCompleteRoute = (route: string, envAddress: string) => {
        return `${envAddress}/${route}`;
      }
}