import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TipoDePuesto } from 'src/app/Models/TipoDePuesto.model';
import { ErrorDialogComponent } from 'src/app/shared/dialogs/error-dialog/error-dialog.component';
import { ErrorHanderService } from 'src/app/shared/error-hander.service';
import { RepositoryService } from 'src/app/shared/repository.service';
import { TipoDePuestoDeleteComponent } from '../tipo-de-puesto-delete/tipo-de-puesto-delete.component';
import { TipoDePuestoUpdateComponent } from '../tipo-de-puesto-update/tipo-de-puesto-update.component';

@Component({
  selector: 'app-tipo-de-puesto-list',
  templateUrl: './tipo-de-puesto-list.component.html',
  styleUrls: ['./tipo-de-puesto-list.component.css']
})
export class TipoDePuestoListComponent {
  public dataForm!: FormGroup;
  public dataFormUpdate!: FormGroup;
  tipoDePuestos: any = {};
  errorMessage: string | undefined;
  constructor(private repository: RepositoryService,
              private dialog: MatDialog,
              private errorService: ErrorHanderService) { }

    ngOnInit(): void {
      this.dataForm = new FormGroup({
        Nombre: new FormControl('', [Validators.required]),
      });
      
      this.llenarDatosTipoDePuesto();
    }

    llenarDatosTipoDePuesto(){
      let url = 'TipoDePuesto'
      this.repository.getData(url).subscribe(e => {
        this.tipoDePuestos = e;
        console.log(this.tipoDePuestos)
      }
      );
    }

    public create = (dataFormValue: any) => {
      if (this.dataForm.valid) {
        this.executeCreation(dataFormValue);
      }
    }

    private executeCreation = (dataFormValue: any) => {
      let newRecord: TipoDePuesto = {
        Nombre: dataFormValue.Nombre,
      }
      let apiUrl = 'tipodepuesto';
      this.repository.create(apiUrl, newRecord)
        .subscribe(res => {
          console.log(res);
          this.llenarDatosTipoDePuesto();
          this.dataForm.reset();
        }
        )
    }
    openErrorDialog() {
      this.dialog.open(ErrorDialogComponent, {
        width: '300px', // Ajusta el ancho según tus necesidades
        data: {
          message: 'El registro no puede ser eliminado porque tiene un registro asociado'
        }
      });
    }

    public deleteTipoDePuesto(id: number | undefined)
    {
      if(id !== undefined)
      {
        const dialogRef = this.dialog.open(TipoDePuestoDeleteComponent, {
          width: '400px',
          
        }
        );
        dialogRef.afterClosed().subscribe(result => {
          if(result === 'yes'){
            let url = 'tipodepuesto/' + id;
            this.repository.delete(url).subscribe(() => {
              console.log('Deleted record:', id);
              this.llenarDatosTipoDePuesto();
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
    
    public updateTipoDePuesto(id: number | undefined)
    {
      if(id !== undefined)
      {
        const dialogRef = this.dialog.open(TipoDePuestoUpdateComponent, {
          width: '400px',
          data: {id: id}
        });
        dialogRef.afterClosed().subscribe(updatedData => {
          if(updatedData) {
            let url = 'tipodepuesto/' + id;
            this.repository.update(url, updatedData).subscribe(() => {
              console.log('Updated record', id);
              this.llenarDatosTipoDePuesto();
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
