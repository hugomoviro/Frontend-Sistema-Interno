import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListarEmpresasComponent } from './OrganizacionApi/Empresas/listar-empresas/listar-empresas.component';
import { ListarCandidatosComponent } from './ReclutamientoApi/Candidato/listar-candidatos/listar-candidatos.component';
import { CreateCandidatosComponent } from './ReclutamientoApi/Candidato/create-candidatos/create-candidatos.component';
import { FormsModule } from '@angular/forms';
import { DeleteEmpresasComponent } from './OrganizacionApi/Empresas/delete-empresas/delete-empresas.component';
import { CreateEmpresaComponent } from './OrganizacionApi/Empresas/create-empresa/create-empresa.component';
import { DeleteCandidatosComponent } from './ReclutamientoApi/Candidato/delete-candidatos/delete-candidatos.component';
import { UpdateCandidatosComponent } from './ReclutamientoApi/Candidato/update-candidatos/update-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarEmpresasComponent,
    ListarCandidatosComponent,
    CreateCandidatosComponent,
    DeleteEmpresasComponent,
    CreateEmpresaComponent,
    DeleteCandidatosComponent,
    UpdateCandidatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
