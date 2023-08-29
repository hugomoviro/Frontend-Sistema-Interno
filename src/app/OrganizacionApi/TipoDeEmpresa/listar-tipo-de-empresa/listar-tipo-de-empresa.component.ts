import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TipoDeEmpresa } from 'src/app/Models/TipoDeEmpresa.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { TipoDeEmpresaDeleteComponent } from '../tipo-de-empresa-delete/tipo-de-empresa-delete.component';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { ErrorDialogComponent } from 'src/app/shared/dialogs/error-dialog/error-dialog.component';


@Component({
  selector: 'app-listar-tipo-de-empresa',
  templateUrl: './listar-tipo-de-empresa.component.html',
  styleUrls: ['./listar-tipo-de-empresa.component.css']
})
export class ListarTipoDeEmpresaComponent implements OnInit{

  public dataForm!: FormGroup;
  tipoDeEmpresas: any = {};
  errorMessage: string | undefined;
  constructor(private repository: RepositoryService,
              private dialog: MatDialog,
              private errorService: ErrorHanderService) { }

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

  public deleteTipoDeEmpresa(id: number | undefined)
  {
    if(id !== undefined)
    {
      const dialogRef = this.dialog.open(TipoDeEmpresaDeleteComponent, {
        width: '400px',
      }
      );
      dialogRef.afterClosed().subscribe(result => {
        if(result === 'yes'){
          let url = 'tipodeempresa/' + id;
          this.repository.delete(url).subscribe(() => {
            console.log('Deleted record:', id);
            this.llenarDatosTipoDeEmpresa();
          },
          (error) => {
            if(error.status === 500)
            {
              this.openErrorDialog();
            }
            this.errorService.handleError(error);
            console.log(error);
          }
          )
        }
      });

    }
  }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent, {
      width: '300px', // Ajusta el ancho según tus necesidades
      data: {
        message: 'El registro no puede ser eliminado porque tiene un registro asociado'
      }
    });
  }
}
