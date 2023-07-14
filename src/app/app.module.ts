import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEmpresaComponent } from './Empresas/create-empresa/create-empresa.component';
import { ListarEmpresasComponent } from './Empresas/listar-empresas/listar-empresas.component';
import { ListarCandidatosComponent } from './Candidato/listar-candidatos/listar-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEmpresaComponent,
    ListarEmpresasComponent,
    ListarCandidatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
