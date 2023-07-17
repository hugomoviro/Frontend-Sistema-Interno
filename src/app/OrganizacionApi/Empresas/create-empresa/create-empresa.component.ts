import { DatePipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/Models/Empresa.model';
import { EmpresaService } from 'src/app/service/OrganizacionApi/Empresa.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.css'],
  providers: [DatePipe]
})
export class CreateEmpresaComponent implements OnInit{
  empresas: any;
  public dataForm!: FormGroup;
  public Nombre!: string;
  public RFC!: string;
  public TipoEmpresaId!: any;
  public FechaDeConstitucion!: Date;
  public Giro!: string;
  public Activado!: boolean;

  constructor( private empresaService: EmpresaService,  private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      Nombre: new FormControl(null, [Validators.required]),
      TipoEmpresaId: new FormControl(null, [Validators.required]),
      FechaDeConstitucion: new FormControl(null, [Validators.required]),
      Giro: new FormControl(null, [Validators.required]),
      Activado: new FormControl(null, [Validators.required])
    });

    this.llenarDatosEmpresa();
  }

  llenarDatosEmpresa(){
    this.empresaService.getEmpresas().subscribe(e =>{
      this.empresas = e;
      console.log(this.empresas)
    });
  }

  public setNombreEmpresa = (event: { target: { value: string; }; }) => {
    this.Nombre = event.target.value;
  }
  public setRFC = (event: { target: { value: string; }; }) => {
    this.RFC = event.target.value;
  }

  public setFechaDeConstitucion = (event: { target: { value: Date; }; }) => {
    this.FechaDeConstitucion = event.target.value;
  }

  public setGiro = (event: { target: { value: string; }; }) => {
    this.Giro = event.target.value;
  }

  public create = (dataFormValue: any) => {
    if (this.dataForm.valid) {
      this.executeCreation(dataFormValue);
    }
  }

  public executeCreation = (dataFormValue: any) => {
    let empresa: Empresa = {
      Nombre: dataFormValue.Nombre,
      RFC: dataFormValue.RFC,
      TipoDeEmpresaId: dataFormValue.TipoEmpresaId,
      FechaDeConstitucion: dataFormValue.FechaDeConstitucion,
      Giro: dataFormValue.Giro,
      Activado: dataFormValue.Activado,
    }
    let fechaDeConstitucion = this.datePipe.transform(empresa.FechaDeConstitucion, 'yyyy-MM-dd');
    console.log(fechaDeConstitucion);
    let apiUrlCreate = 'https://localhost:5001/api/odata/empresa'
    this.empresaService.create(apiUrlCreate, empresa).subscribe(result => {
      // Manejar el resultado de la creación según tus necesidades
    console.log('Empresa creada exitosamente', result);
      window.location.href = "listar-empresas";
    }
    );
    
    
  }


  public onCancel = () => {
    window.location.href = "listar-empresas";
  }


}
