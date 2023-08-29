import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoDeEmpresa } from 'src/app/Models/TipoDeEmpresa.model';
import { RepositoryService } from 'src/app/shared/repository.service';

@Component({
  selector: 'app-listar-tipo-de-empresa',
  templateUrl: './listar-tipo-de-empresa.component.html',
  styleUrls: ['./listar-tipo-de-empresa.component.css']
})
export class ListarTipoDeEmpresaComponent implements OnInit{

  public dataForm!: FormGroup;
  tipoDeEmpresas: any = {};
  constructor(private repository: RepositoryService
              ) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      Nombre: new FormControl('', [Validators.required]),
    });
    this.llenarDatosTipoDeEmpresa();
  }

  llenarDatosTipoDeEmpresa(){
    let url = 'TipoDeEmpresa'
    this.repository.getData(url).subscribe(e => {
      this.tipoDeEmpresas = e;
      console.log(this.tipoDeEmpresas)
    }
    );
  }

  public create = (dataFormValue: any) => {
    if (this.dataForm.valid) {
      this.executeCreation(dataFormValue);
    }
  }

  private executeCreation = (dataFormValue: any) => {
    let newRecord: TipoDeEmpresa = {
      Nombre: dataFormValue.Nombre,
    }
    let apiUrl = 'tipodeempresa';
    this.repository.create(apiUrl, newRecord)
      .subscribe(res => {
        console.log(res);
        this.llenarDatosTipoDeEmpresa();
      }
      )
  }
  



}
