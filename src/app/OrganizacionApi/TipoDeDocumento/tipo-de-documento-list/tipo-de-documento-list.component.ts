import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { TipoDeDocumentoDeleteComponent } from '../tipo-de-documento-delete/tipo-de-documento-delete.component';
import { ErrorDialogComponent } from 'src/app/shared/dialogs/error-dialog/error-dialog.component';
import { TipoDeDocumentoUpdateComponent } from '../tipo-de-documento-update/tipo-de-documento-update.component';
import { TipoDeDocumento } from 'src/app/Models/TipoDeDocumento.model';

@Component({
  selector: 'app-tipo-de-documento-list',
  templateUrl: './tipo-de-documento-list.component.html',
  styleUrls: ['./tipo-de-documento-list.component.css']
})
export class TipoDeDocumentoListComponent {

  public dataForm!: FormGroup;
  public dataFormUpdate!: FormGroup;
  tipoDeDocumentos: any = {};
  errorMessage: string | undefined;
  constructor(private repository: RepositoryService,
              private dialog: MatDialog,
              private errorService: ErrorHanderService) { }

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      Nombre: new FormControl('', [Validators.required]),
    });
    
    this.llenarDatosTipoDeDocumento();
  }

  llenarDatosTipoDeDocumento(){
    let url = 'TipoDeDocumento'
    this.repository.getData(url).subscribe(e => {
      this.tipoDeDocumentos = e;
      console.log(this.tipoDeDocumentos)
    }
    );
  }

  public create = (dataFormValue: any) => {
    if (this.dataForm.valid) {
      this.executeCreation(dataFormValue);
    }
  }

  private executeCreation = (dataFormValue: any) => {
    let newRecord: TipoDeDocumento = {
      Nombre: dataFormValue.Nombre,
    }
    let apiUrl = 'tipodedocumento';
    this.repository.create(apiUrl, newRecord)
      .subscribe(res => {
        console.log(res);
        this.llenarDatosTipoDeDocumento();
      }
      )
  }

  public deleteTipoDeDocumento(id: number | undefined)
  {
    if(id !== undefined)
    {
      const dialogRef = this.dialog.open(TipoDeDocumentoDeleteComponent, {
        width: '400px',
        data: {id: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.llenarDatosTipoDeDocumento();
      });
    }
  }
  
  public updateTipoDeDocumento(id: number | undefined)
  {
    if(id !== undefined)
    {
      const dialogRef = this.dialog.open(TipoDeDocumentoUpdateComponent, {
        width: '400px',
        data: {id: id}
      });
      dialogRef.afterClosed().subscribe(updatedData => {
        if(updatedData) {
          let url = 'tipodedocumento/' + id;
          this.repository.update(url, updatedData).subscribe(() => {
            console.log('Updated record', id);
            this.llenarDatosTipoDeDocumento();
          },
          (error) => {
            this.errorService.handleError(error);
            console.log(error);
          }
          )
        }
      });
        }
  }

}
function openErrorDialog() {
  throw new Error('Function not implemented.');
}

