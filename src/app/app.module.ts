import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListarCandidatosComponent } from './ReclutamientoApi/Candidato/listar-candidatos/listar-candidatos.component';
import { CreateCandidatosComponent } from './ReclutamientoApi/Candidato/create-candidatos/create-candidatos.component';
import { FormsModule } from '@angular/forms';
import { DeleteCandidatosComponent } from './ReclutamientoApi/Candidato/delete-candidatos/delete-candidatos.component';
import { UpdateCandidatosComponent } from './ReclutamientoApi/Candidato/update-candidatos/update-candidatos.component';
import { ListarDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/listar-documento-candidato/listar-documento-candidato.component';
import { CreateDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/create-documento-candidato/create-documento-candidato.component';
import { DeleteDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/delete-documento-candidato/delete-documento-candidato.component';
import { UpdateDocumentoCandidatoComponent } from './ReclutamientoApi/DocumentoCandidato/update-documento-candidato/update-documento-candidato.component';
import { RepositoryService } from './shared/repository.service';
import { RoutingModule } from './routing/routing.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CreateDocumentoComponent } from './ReclutamientoApi/Documento/create-documento/create-documento.component';
import { DeleteDocumentoComponent } from './ReclutamientoApi/Documento/delete-documento/delete-documento.component';
import { ListarDocumentoComponent } from './ReclutamientoApi/Documento/listar-documento/listar-documento.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarCandidatosComponent,
    CreateCandidatosComponent,
    DeleteCandidatosComponent,
    UpdateCandidatosComponent,
    ListarDocumentoCandidatoComponent,
    CreateDocumentoCandidatoComponent,
    DeleteDocumentoCandidatoComponent,
    UpdateDocumentoCandidatoComponent,
    CreateDocumentoComponent,
    DeleteDocumentoComponent,
    ListarDocumentoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    RepositoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
