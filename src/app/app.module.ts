import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    RepositoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
