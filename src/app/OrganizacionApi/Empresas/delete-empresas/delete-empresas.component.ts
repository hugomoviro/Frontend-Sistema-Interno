import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/Models/Empresa.model';
import { EmpresaService } from 'src/app/service/OrganizacionApi/Empresa.service';

@Component({
  selector: 'app-delete-empresas',
  templateUrl: './delete-empresas.component.html',
  styleUrls: ['./delete-empresas.component.css']
})
export class DeleteEmpresasComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute, private empresaService: EmpresaService) { }
  public record!: Empresa;
  ngOnInit(): void {
   this.getDeleteRecord();
  }

  public getDeleteRecord = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `https://localhost:5001/api/odata/Empresa/?id=` +id;

    this.empresaService.getEmpresaById(id).subscribe(res => {
      this.record = res as Empresa;
    })

    
  }

  public deleteRecord = () => {
    if(this.record.Nombre && this.record.TipoDeEmpresaId && this.record.FechaDeConstitucion && this.record.Giro && this.record.RFC){
      let id: string = this.activeRoute.snapshot.params['id'];
      let deleteUrl: string = `https://localhost:5001/api/odata/Empresa(${id})`;
      this.empresaService.delete(deleteUrl)
      .subscribe(res => {
            window.location.href = "listar-empresas";
      })
  }
}

public onCancel = () => {
  window.location.href = "listar-empresas";
}


}
