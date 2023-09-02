import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarDocumentoComponent } from './listar-documento/listar-documento.component';
import { CreateDocumentoComponent } from './create-documento/create-documento.component';
import { DeleteDocumentoComponent } from './delete-documento/delete-documento.component';
import { DocumentoRoutingComponent } from './documento-routing/documento-routing.component';



@NgModule({
  declarations: [
    ListarDocumentoComponent,
    CreateDocumentoComponent,
    DeleteDocumentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DocumentoRoutingComponent
  ]
})
export class DocumentoModule { }
